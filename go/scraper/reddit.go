package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"
)

type Post struct {
	Title string `json:"title"`
	URL   string `json:"url"`
}

func main() {
	// Get the current directory
	dir, err := os.Getwd()
	if err != nil {
		panic(err)
	}

	// Open the file
	file, err := os.Open(dir + "/gpt/cities.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	// Create a scanner to read the file line by line
	scanner := bufio.NewScanner(file)

	// Get the first subreddit and print it
	var subreddit string
	if scanner.Scan() {
		subreddit = scanner.Text()
		fmt.Printf("Subreddit: %s\n", subreddit)
	}

	// Check for errors during scanning
	if err := scanner.Err(); err != nil {
		panic(err)
	}

	// Set up the request to the Reddit API
	url := fmt.Sprintf("https://www.reddit.com%s/new.json?limit=100", subreddit)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		panic(err)
	}
	req.Header.Set("User-Agent", "Mozilla/5.0")

	// Send the request and parse the JSON response
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
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
		panic(err)
	}

	// Print today's date
	fmt.Printf("Today's date: %s\n", time.Now().Format("2006-01-02"))

	// Print the titles and URLs of the top 5 posts
	fmt.Println("Top 5 posts today:")
	for i := 0; i < 5; i++ {
		post := data.Data.Children[i].Data
		fmt.Printf("%d. %s - %s\n", i+1, post.Title, post.URL)
	}
}
