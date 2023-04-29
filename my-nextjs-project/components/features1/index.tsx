import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               <Text span css={{color: '$blue600'}}>
                  Use Cases
               </Text>
               <Text h3>Case Studies</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  Our algorithm efficiently extracts, refines, and analyzes sentiment from city-specific text data on Reddit, presenting the results as easy-to-grasp figures. Discover how this innovative tool tackles real-world challenges.
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     🏝️ Travel Destinations
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Leverage real-time sentiment metrics to enhance comparisons between travel destinations, providing a deeper insight into each location.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     📍 Moving To A New Location
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Utilize real-time sentiment metrics to gauge which cities project the most positive vibes. Our algorithm's aggregated sentiment score empowers the public to make informed decisions about relocating.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     📈 Property Investment
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Track and assess sentiment across different cities to identify promising locations for property investment and acquisition.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <video
                  src="https://cdn.discordapp.com/attachments/836704195674374164/1100959525936300092/Screen_Recording_2023-04-26_at_7.17.21_PM_online-video-cutter.com.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '150%', maxWidth: '500px' }}
               />
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
