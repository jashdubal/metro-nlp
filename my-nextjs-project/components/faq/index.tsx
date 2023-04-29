import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>Learn More</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Learn more about what AI tools like Metro NLP can do for you.
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     What is the Metro NLP project all about?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        The Metro NLP project aims to analyze Reddit posts to gauge the sentiment of various cities using deep learning and natural language processing. This helps users make informed decisions about where to move, travel, or invest.
                     </Text>
                     
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     Can this tool be used to decide where to move or travel?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Absolutely! The project provides valuable insights into the general vibe of different cities. However, it is important to remember that this tool should only be one part of the decision-making process. Other factors, such as personal preferences, job opportunities, cost of living, and more, should also be considered.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     How does the sentiment analysis work?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        The system employs advanced techniques for web scraping and text preprocessing written in the Go programming language. Subsequently, a state-of-the-art deep learning model from the Hugging Face Transformers library, the <a href="https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment" target={"_blank"}>twitter-roberta-base-sentiment model</a> is applied to determine sentiment. This model has been fine-tuned on large-scale social media data to accurately classify and gauge sentiment. Further, the system aggregates and presents the sentiment data in easy-to-use dashboards, enabling users to quickly analyze the sentiment of Reddit posts on any topic.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     Is there a cost associated with using this tool?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Metro AI is completely free to use. Access to this kind of information should be available to everyone, so users are free to explore and share it with others.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
