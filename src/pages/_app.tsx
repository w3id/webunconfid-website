import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/core'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { AppProps } from 'next/app'
import Head from 'next/head'

import theme from '~/utils/theme'

import 'typeface-inter'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ChakraProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  )
}
