import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Try now',
   ];
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
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
            </Navbar.Content>
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
         

            

            <Navbar.Item>
               <Button auto flat href="#">
                  Try now
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
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
            <Navbar.Item hideIn={'xs'}>
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
