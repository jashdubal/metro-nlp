import { Button, Card, Divider, Input, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";

// Dynamically import the Typewriter component
const Typewriter = dynamic(
  () => import("typewriter-effect"),
  { ssr: false } // This will disable server-side rendering for the Typewriter component
);

export const Hero = () => {
  return (
    <>
      <Flex
        css={{
          gap: "$3",
          px: "$6",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          "@sm": {
            flexDirection: "row",
            mt: "$30",
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "$5",
          }}
        >
          


          <Box
            css={{
              textAlign: "center",
              color: "transparent",
            }}
          >
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              Introducing{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
               //  linearGradient: "to right, $colors$blue900, $colors$primary",
               
               linearGradient: "to right, $colors$primary, $colors$secondary",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Metro NLP
            </Text>

         
          </Box>

          <Flex
    css={{
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
   
    <Text
      css={{
        fontFamily: "Menlo, monospace",
        fontSize: "1.0rem",
        color: '$accents8',
        animation: "typing 1.5s steps(40, end), blink-caret .75s step-end infinite",

      }}
    >
      <Typewriter
        options={{
          strings: ["Where should I move?",
          "Ideal travel destinations?",
          "Cities with positive vibes?",
          "Safest cities to live in?",],
          deleteSpeed: 30,
          autoStart: true,
          loop: true,
          delay: 40,
        }}
      />
    </Text>
  </Flex>

          <Flex
              css={{
                gap: "$8",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Input placeholder="Enter email address" size="lg" />
              <Button>Join Newsletter</Button>
            </Flex>
          
          <Flex
            wrap={"wrap"}
            css={{
              gap: "$8",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Real-time data.
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> Natural language processing + deep learning.
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> 20 cities across NA.
            </Flex>
          </Flex>
        </Box>
        <Box
          css={{
            "& img": {
              width: "775px",
              objectFit: "contain",
            },
          }}
        ></Box>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
      />
    </>
  );
};
