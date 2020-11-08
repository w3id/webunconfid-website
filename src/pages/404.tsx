import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Text, Link as ChakraLink } from '@chakra-ui/core'

import { LayoutRoot, Navigation, Content, Page, PageHeader, PageBody } from '~/components/layout'

const MAX_CONTAINER_WIDTH = 952

const NotFoundPage: NextPage = () => {
  return (
    <LayoutRoot>
      <Navigation />
      <Content>
        <Page>
          <PageHeader title="404." />
          <PageBody textAlign="center" _containerProps={{ maxWidth: MAX_CONTAINER_WIDTH }}>
            <Text>
              Halaman ini tidak dapat ditemukan. Silakan kembali ke{' '}
              <Link href="/" passHref>
                <ChakraLink color="brand.500">halaman utama</ChakraLink>
              </Link>
              .
            </Text>
          </PageBody>
        </Page>
      </Content>
    </LayoutRoot>
  )
}

export default NotFoundPage
