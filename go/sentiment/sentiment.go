package main

import (
	"fmt"
	"os"
	"os/exec"
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

func main() {
	text := "Go is a general-purpose language designed with systems programming in mind. 😊 123"

	// Clean the text
	cleanedText := cleanText(text)

	fmt.Printf("Cleaned text: %s", cleanedText)

	// Get the current directory
	dir, err := os.Getwd()
	if err != nil {
		panic(err)
	}

	cmd := exec.Command("python", dir+"/scripts/sentiment.py", cleanedText)
	output, err := cmd.Output()
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	sentiment := string(output)
	fmt.Printf("\nSentiment: %s\n", sentiment)
}
