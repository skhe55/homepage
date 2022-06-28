import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '~/components/navbar'
import { NextRouter } from 'next/router'
import dynamic from 'next/dynamic'
import RetroComputerLoader from '../retro-computer-loader'
import Footer from '../footer'

type MainProps = {
  children: ReactNode
  router: NextRouter
}

const LazyRetroComputer = dynamic(() => import('../retro-computer'), {
  ssr: false,
  loading: () => <RetroComputerLoader />
})

const Main: FC<MainProps> = ({ children, router }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content="Sergey Kovtun homepage" />
        <meta name="author" content="ikebukurottw" />
        <meta property="og:site_name" content="Sergey Kovtun" />
        <meta property="og:title" content="Sergey Kovtun" />
        <meta property="og:type" content="website" />
        <title>Sergey Kovtun - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyRetroComputer />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
