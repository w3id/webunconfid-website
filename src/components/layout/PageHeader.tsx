import { Box, BoxProps, Heading, ImgProps, Img } from '@chakra-ui/core'
import * as React from 'react'
import Container, { ContainerProps } from './Container'

export interface PageHeaderProps extends BoxProps {
  title: string
  image?: string
  _containerProps?: ContainerProps
  _imgProps?: ImgProps
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, image, _containerProps, _imgProps, ...rest }) => {
  return (
    <Box as="header" py={8} px={6} textAlign="center" {...rest}>
      <Container {..._containerProps}>
        {image && <Img mb="8" src={image} maxWidth={960} mx="auto" {..._imgProps} />}
        <Heading as="h1" size="xl">
          {title}
        </Heading>
        <Box as="hr" mt={8} borderTop="4px solid" borderTopColor="black" width="56px" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
      </Container>
    </Box>
  )
}

export default PageHeader
