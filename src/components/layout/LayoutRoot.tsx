import { Flex } from '@chakra-ui/core'
import * as React from 'react'
import Head from 'next/head'

interface PageProps {
  title?: string
}

const LayoutRoot: React.FC<PageProps> = ({ children, title }) => (
  <Flex flexDirection="column" minHeight="100vh" overflowX="hidden">
    <Head>
      <title>{title || 'WebUnconf 2020'}</title>
    </Head>
    {children}
  </Flex>
)

export default LayoutRoot
