import {Button, Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../styles/flex';

export const Trusted = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               Built with:
            </Text>
            <Grid.Container
               gap={6}
               alignItems="center"
               justify="center"
               css={{
                  'width': '100%',
                  '@sm': {
                     width: '100%',
                  },
                  '&  span': {
                     whiteSpace: 'pre',
                  },
               }}
            >
               <Grid justify="center">
                  <Flex align={'center'} justify={'center'}>
                     <Text weight={'semibold'} span size={'$lg'}>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"   height="45"></img>
                     </Text>
                  </Flex>
               </Grid>
               <Grid  justify="center">
                  <Flex align={'center'}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"   height="50"></img>
                  </Flex>
               </Grid>
               <Grid  justify="center">
                  <Flex align={'center'}>

                     <img src="https://upload.wikimedia.org/wikipedia/commons/archive/0/05/20191207182211%21Go_Logo_Blue.svg"  height="40"></img>
                  </Flex>
               </Grid>
               <Grid  justify="center">
                  <Flex align={'center'}>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/320px-Postgresql_elephant.svg.png"  height="50"></img>
                  </Flex>
               </Grid>
               <Grid  justify="center">
                  <Flex align={'center'}>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/320px-Python-logo-notext.svg.png"  height="50"></img>
                  </Flex>
               </Grid>
               <Grid justify="center">
                  <Flex align={'center'}>
                  <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"  height="50"></img>
                  </Flex>
               </Grid>
            </Grid.Container>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
