import { Box, BoxProps, Stack } from '@chakra-ui/core'
import * as React from 'react'
import convert from 'htmr'
import Container, { ContainerProps } from './Container'
import htmrTransform from '~/utils/htmrTransform'

interface PageBodyProps extends BoxProps {
  content?: string
  _containerProps?: ContainerProps
}

const PageBody: React.FC<PageBodyProps> = ({ children, content, _containerProps, ...rest }) => {
  if (content) {
    return (
      <Box as="section" pt={0} pb={12} px={6} {...rest}>
        <Container {..._containerProps}>
          <Stack spacing={4}>{convert(content, { transform: htmrTransform })}</Stack>
        </Container>
      </Box>
    )
  }

  return (
    <Box as="section" pt={0} pb={12} px={6} {...rest}>
      <Container {..._containerProps}>{children}</Container>
    </Box>
  )
}

export default PageBody
