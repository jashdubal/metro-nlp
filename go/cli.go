package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"regexp"
	"strings"
	"time"

	"github.com/pterm/pterm"
)

type City struct {
	CityID        int
	Name          string
	SubredditName string
}

type Post struct {
	Title string `json:"title"`
	URL   string `json:"url"`
}

const olderThanDuration = 1 * time.Second // Change this to 10 * 24 * time.Hour for 10 days

func main() {
	pterm.DefaultBigText.WithLetters(pterm.NewLettersFromString("Metro NLP")).Render()
	pterm.DefaultCenter.Println("Welcome to Metro NLP!")
	pterm.Println()
	time.Sleep(2 * time.Second)

	// Get all cities
	cities := []City{
		{CityID: 1, Name: "San Francisco", SubredditName: "/r/sanfrancisco"},
		{CityID: 2, Name: "New York City", SubredditName: "/r/nyc"},
		{CityID: 3, Name: "Seattle", SubredditName: "/r/seattle"},
	}

	// Get the top 10 posts for each city subreddit and aggregate the sentiment_score
	for _, city := range cities {
		posts, err := getTopPosts(city.SubredditName, 10)
		if err != nil {
			pterm.Error.Printf("Error getting posts for %s: %v\n", city.SubredditName, err)
			continue
		}

		pterm.DefaultSection.Println("Analyzing sentiment for " + city.Name)

		sentimentScore := 0
		analyzedPosts := 0
		for _, post := range posts {
			cleanedText := cleanText(post.Title)
			sentiment, err := analyzeSentiment(cleanedText)
			if err != nil {
				pterm.Error.Printf("Error analyzing sentiment: %v\n", err)
				continue
			}

			// Print out the subreddit, post, and sentiment
			pterm.Printf("%s: %s (Sentiment Score: %d)\n", city.SubredditName, post.Title, sentiment)
			sentimentScore += sentiment
			analyzedPosts++
		}

		pterm.Success.Printf("Sentiment for city: %s (Sentiment Score: %d/%d)\n", city.Name, sentimentScore, analyzedPosts)
		pterm.Println()
	}

}

func getTopPosts(subreddit string, limit int) ([]Post, error) {
	url := fmt.Sprintf("https://www.reddit.com%s/top.json?t=year&limit=%d", subreddit, limit)

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("User-Agent", "Mozilla/5.0")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var data struct {
		Data struct {
			Children []struct {
				Data Post `json:"data"`
			} `json:"children"`
		} `json:"data"`
	}

	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return nil, err
	}

	var posts []Post
	for _, child := range data.Data.Children {
		posts = append(posts, child.Data)
	}

	return posts, nil
}

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

func analyzeSentiment(text string) (int, error) {
	dir, err := os.Getwd()
	if err != nil {
		return 0, err
	}

	cmd := exec.Command("python", dir+"/scripts/sentiment.py", text)
	output, err := cmd.Output()
	if err != nil {
		return 0, err
	}

	sentimentLabel := strings.TrimSpace(string(output))

	var sentiment int
	switch sentimentLabel {
	case "negative":
		sentiment = 0
	case "positive":
		sentiment = 1

	default:
		return 0, fmt.Errorf("unexpected sentiment label: %s", sentimentLabel)
	}

	return sentiment, nil
}
