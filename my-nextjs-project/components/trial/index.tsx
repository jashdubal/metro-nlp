import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const Trial = () => {
   return (
      <>
         <Flex
            css={{
               py: '$15',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Try it now</Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$15',
                  textAlign: 'center',
               }}
            >
               View real-time sentiment values for cities around the world.
            </Text>

            <Button auto>Enter</Button>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0' }}
         />
      </>
   );
};
