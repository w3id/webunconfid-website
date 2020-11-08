import { Flex } from '@chakra-ui/core'
import * as React from 'react'

const Content: React.FC = ({ children }) => {
  return (
    <Flex as="main" flexDirection="column" flex="1 1 auto">
      {children}
    </Flex>
  )
}

export default Content
