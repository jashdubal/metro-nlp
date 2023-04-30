import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';
import { useRouter } from 'next/router';



export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Try now',
   ];
   const router = useRouter();
   const { pathname } = router;

   return (
      <Navbar
 variant={"sticky"} 
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               opacity: 0.95,
               backdropFilter: 'blur(70px)',
               bgBlur: '70px',
               borderBottom: '1px solid $colors$border',
               '@sm': {
                  opacity: 0.95,
               backdropFilter: 'blur(70px)',
               bgBlur: '70px',
                  borderBottom: '1px solid $colors$border',
               }
            },
         }}>
         <Navbar.Brand>
    <a href='/'>
      <img src="https://cdn.discordapp.com/attachments/836704195674374164/1102091549086580736/DALLE_2023-04-29_22.35.24_-_perfectly_symmetrical_abstract_logo_balanced_centered_deep_BLUE_PURPLE_colors_aesthetic_Silicon_Valley_NLP_startup_innovative_structure.png" alt="logo" width="50" height="50" />
    </a>
</Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/jashdubal/metro-nlp"
               >
                  <GithubIcon />
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
         

            

         {pathname !== '/dashboard' && (
  <Navbar.Item>
    <Button
      auto
      flat
      href="#"
      onPressEnd={() => {
        // Go to the /dashboard page
         router.push('/dashboard');

      }}

      
    >
      Try now
    </Button>
  </Navbar.Item>
)}
            <Navbar.Item>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/jashdubal/metro-nlp"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item>
            <Navbar.Item>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
                  css={{
                     mr: '$3',
                  }}
                  

               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
