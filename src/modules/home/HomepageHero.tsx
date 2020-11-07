import { Box, BoxProps } from '@chakra-ui/core'
import * as React from 'react'
import { Container } from '~/components/layout'

type HomepageHeroProps = BoxProps

const HomePageHero: React.FC<HomepageHeroProps> = ({ children, ...rest }) => {
  return (
    <Box as="header" px={6} py={36} {...rest}>
      <Container>{children}</Container>
    </Box>
  )
}

export default HomePageHero
