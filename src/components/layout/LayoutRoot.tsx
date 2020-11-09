import { Flex } from '@chakra-ui/core'
import * as React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import Footer from './Footer'

interface PageProps extends NextSeoProps {
  title?: string
}

const LayoutRoot: React.FC<PageProps> = ({ children, title, ...rest }) => (
  <Flex flexDirection="column" minHeight="100vh" overflowX="hidden">
    <NextSeo title={title || ''} {...rest} />
    {children}
    <Footer />
  </Flex>
)

export default LayoutRoot
