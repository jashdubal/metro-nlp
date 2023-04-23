package main

import (
	"testing"
)

func TestCleanText(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected string
	}{
		{
			name:     "Test with emojis and URL",
			input:    "Go is a general-purpose language designed with systems programming in mind. 😊 123 https://www.example.com",
			expected: "Go is a language designed with systems programming in URL",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			output := cleanText(tt.input)
			if output != tt.expected {
				t.Errorf("Expected '%s', got '%s'", tt.expected, output)
			}
		})
	}
}
