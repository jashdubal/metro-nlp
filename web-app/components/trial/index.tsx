import { Button, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';
import Link from 'next/link';
import CustomButton from '../CustomButton';

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

          <CustomButton auto css={{ gap: '$15', width: '250px' }}
          onPressEnd={() => {
            // Redirect to the /dashboard page
            window.location.href = '/dashboard';
            }}
            >
            Start Analyzing
          </CustomButton>

         <Text
           span
           css={{
             color: '$accents8',
             textAlign: 'center',
             paddingTop: '10px',
           }}
         >
           View real-time quantitative sentiments for cities across North
           America.
         </Text>
       </Flex>
 
       <Divider css={{ position: 'absolute', inset: '0p', left: '0' }} />
     </>
   );
 };
