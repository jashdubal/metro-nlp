import { Button, Divider, Grid, Text, Tooltip } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Flex } from '../styles/flex';

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
   <Tooltip content={'Oracle Cloud Infrastructure'}
      placement={'top'}
      trigger={'hover'}
      css={{'borderRadius': '10px'}}
   >
      <Flex align={'center'} justify={'center'}>
         <img src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-700x394.png" height="50"></img>
      </Flex>
   </Tooltip>
</Grid>

<Grid justify="center">
   <Tooltip content={'Ubuntu VM'}
      placement={'top'}
      trigger={'hover'}
      css={{'borderRadius': '10px'}}
   >
      <Flex align={'center'} justify={'center'}>
         <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png"  height="40"></img>
      </Flex>
   </Tooltip>
</Grid>

<Grid  justify="center">
   <Tooltip content={'Golang'}
      placement={'top'}
      trigger={'hover'}
      css={{'borderRadius': '10px'}}
   >
      <Flex align={'center'}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/archive/0/05/20191207182211%21Go_Logo_Blue.svg"  height="40"></img>
      </Flex>
   </Tooltip>
</Grid>

<Grid  justify="center">
   <Tooltip content={'Python'}
      placement={'top'}
      trigger={'hover'}
      css={{'borderRadius': '10px'}}
   >
      <Flex align={'center'}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/320px-Python-logo-notext.svg.png"  height="50"></img>
      </Flex>
   </Tooltip>
</Grid>

<Grid justify="center">
   <Tooltip content={'Hugging Face Transformers'}
      placement={'top'}
      trigger={'hover'}
      css={{'borderRadius': '10px'}}
   >
      <Flex align={'center'}>
         <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"  height="50"></img>
      </Flex>
   </Tooltip>
</Grid>

<Grid  justify="center">
   <Tooltip content={'PostgreSQL'}
      placement={'top'}
      trigger={'hover'}
      css={{'borderRadius': '10px'}}
   >
      <Flex align={'center'}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/320px-Postgresql_elephant.svg.png"  height="50"></img>
      </Flex>
   </Tooltip>
</Grid>

<Grid  justify="center">
   <Tooltip content={'ReactJS'}
      placement={'top'}
      trigger={'hover'}
      css={{'borderRadius': '10px'}}
   >
      <Flex align={'center'}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"  height="50"></img>
      </Flex>
   </Tooltip>
</Grid>


<Grid  justify="center">
   <Tooltip content={'TypeScript'}
      placement={'top'}
      trigger={'hover'}
      css={{'borderRadius': '10px'}}
   >
      <Flex align={'center'}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"   height="50"></img>

      </Flex>
   </Tooltip>
</Grid>

<Grid justify="center">
   <Tooltip content={'Tailwind CSS'}
      placement={'top'}
      trigger={'hover'}
      css={{'borderRadius': '10px'}}
   >
      <Flex align={'center'} justify={'center'}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"  height="50"></img>
      </Flex>
   </Tooltip>
</Grid>

               
               
            </Grid.Container>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
