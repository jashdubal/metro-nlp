import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
            <Flex
               justify={'center'}
               wrap={'wrap'}
               align={'center'}
               css={{
                  'gap': '$10',
                  '&  ul': {
                     margin: 0,
                  },
                  '@sm': {},
               }}
            >
               <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Resources</Text>
                  <Box as={'ul'} css={{gap: '$5', listStyle: 'none'}}>
                     <Box as={'li'}>
                        
                        <a href="https://github.com/jashdubal/metro-nlp" target={"_blank"}><Text span css={{color: '$accents8'}}>
                           Code
                        </Text></a>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Contact</Text>
                  <Box as={'ul'} css={{gap: '$5', listStyle: 'none'}}>
                     <Box as={'li'}>
                     <a href="https://github.com/jashdubal/metro-nlp"><Text span css={{color: '$accents8'}}>
                           Founder
                        </Text></a>
                     </Box>
                  </Box>
               </Flex>
            </Flex>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Divider
                  css={{
                     mt: '$14',
                     display: 'flex',
                     justifyContent: 'center',
                  }}
               />
               <Flex
                  //   justify={'between'}
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Flex
                     css={{
                        gap: '$10',
                     }}
                     wrap={'wrap'}
                  >
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{color: '$accents8'}}>
                        Built by Jash Dubal in Calgary, Alberta 🇨🇦
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
