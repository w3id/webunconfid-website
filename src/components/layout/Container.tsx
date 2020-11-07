import { Container as ChakraContainer, ContainerProps as ChakraContainerProps } from '@chakra-ui/core'
import * as React from 'react'

export interface ContainerProps extends ChakraContainerProps {
  size?: string | number
}

const Container: React.FC<ContainerProps> = ({ children, size = '90rem', ...rest }) => {
  return (
    <ChakraContainer mx="auto" px={0} width="100%" maxWidth={size} {...rest}>
      {children}
    </ChakraContainer>
  )
}

export default Container
