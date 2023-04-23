package main

import (
	"regexp"
	"strings"
)

func cleanText(text string) string {
	text = strings.ReplaceAll(text, "\n", " ")
	text = strings.ReplaceAll(text, "\r", " ")

	// Replace URLs
	urlRegex := regexp.MustCompile(`https?://\S+|www\.\S+`)
	text = urlRegex.ReplaceAllString(text, "URL")

	// Replace mentions
	mentionRegex := regexp.MustCompile(`@(\w+)`)
	text = mentionRegex.ReplaceAllString(text, "@USER")

	// Remove words containing non-alphabetic characters (including numbers and emojis)
	words := strings.Fields(text)
	var cleanedWords []string
	for _, word := range words {
		if regexp.MustCompile(`^[a-zA-Z]+$`).MatchString(word) {
			cleanedWords = append(cleanedWords, word)
		}
	}
	return strings.Join(cleanedWords, " ")
}
