import * as React from 'react'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/core'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { AppProps } from 'next/app'
import Head from 'next/head'

import theme from '~/utils/theme'
import siteMetadata from '~/_data/siteMetadata.json'

import 'typeface-inter'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const { title, description, siteUrl } = siteMetadata
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || siteUrl

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
        <DefaultSeo
          title={title}
          titleTemplate={`%s · ${title}`}
          description={description}
          canonical={baseUrl + router.asPath || ''}
          openGraph={{
            title,
            description,
            url: baseUrl,
            type: 'website',
            site_name: title,
            images: [
              {
                url: `${siteMetadata.siteUrl}/social.png`,
                width: 1200,
                height: 620,
                alt: siteMetadata.title
              }
            ]
          }}
          twitter={{
            cardType: 'summary_large_image'
          }}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  )
}
