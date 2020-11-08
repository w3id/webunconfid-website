import { Box, BoxProps } from '@chakra-ui/core'
import * as React from 'react'
import { Container } from '~/components/layout'

interface HomepageSectionProps extends BoxProps {
  _containerProps?: BoxProps
}

const HomepageSection: React.FC<HomepageSectionProps> = ({ children, _containerProps, ...rest }) => {
  return (
    <Box as="section" px={6} py={12} {...rest}>
      <Container {..._containerProps}>{children}</Container>
    </Box>
  )
}

export default HomepageSection
