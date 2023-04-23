package main

import (
	"testing"
)

func TestGetTopPosts(t *testing.T) {
	subreddit := "/r/sanfrancisco"
	limit := 5

	posts, err := getTopPosts(subreddit, limit)
	if err != nil {
		t.Fatalf("Error fetching top posts: %v", err)
	}

	if len(posts) != limit {
		t.Errorf("Expected %d posts, got %d", limit, len(posts))
	}

	for _, post := range posts {
		if post.Title == "" {
			t.Error("Post title should not be empty")
		}

		if post.URL == "" {
			t.Error("Post URL should not be empty")
		}
	}
}
