package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Post struct {
	Title string `json:"title"`
	URL   string `json:"url"`
}

func getTopPosts(subreddit string, limit int) ([]Post, error) {
	url := fmt.Sprintf("https://www.reddit.com%s/new.json?limit=%d", subreddit, limit)
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

func main() {
	subreddit := "/r/sanfrancisco"

	posts, err := getTopPosts(subreddit, 5)
	if err != nil {
		panic(err)
	}

	// Print the titles and URLs of the top 5 posts
	fmt.Println("Top 5 posts today:")
	for i, post := range posts {
		fmt.Printf("%d. %s - %s\n", i+1, post.Title, post.URL)
	}
}
