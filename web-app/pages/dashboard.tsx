import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Box} from '../components/styles/box';
import {Text} from '@nextui-org/react';
import Head from 'next/head';


const Dashboard: NextPage = () => {
    return (
        <>
        <Head>
            <title>Dashboard | Metro NLP</title>
        </Head>
        
        <Layout>
            <Nav />
            <Box as="main"
            css={
                {
                    display: "flex",
                    justifyContent: "center",
            }}>
                
            <Text
              h1
              css={{
                display: "inline",
               //  linearGradient: "to right, $colors$blue900, $colors$primary",
               
               linearGradient: "to right, $colors$primary, $colors$secondary",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                padding: "0 0 0 0.5rem",
              }}
            >
            Metro NLP Dashboard
            </Text>
            </Box>

              <Box
                css={
                    {
                        display: "flex",
                        justifyContent: "center",
                        padding: "1rem",
                }}>
                <Text
                    css={{
                        display: "inline",
                        //  linearGradient: "to right, $colors$blue900, $colors$primary",
                    }}
                > coming soon...
                </Text>
            </Box>
            
        </Layout>
        </>
    );
};

export default Dashboard;
