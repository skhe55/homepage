import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '~/components/layouts/main'
import { CSSReset } from '@chakra-ui/react'
import theme from '~/lib/theme'
import Fonts from '~/components/fonts'
import { wrapper } from '~/store'
import { AnimatePresence } from 'framer-motion'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <CSSReset />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            window.scrollTo({ top: 0 })
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default wrapper.withRedux(MyApp)
