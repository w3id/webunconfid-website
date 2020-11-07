import * as React from 'react'
import Link from 'next/link'
import { Box, Flex, Img } from '@chakra-ui/core'
import Container from '../Container'

import menuItems from '~/_data/menu.json'
import NavMenu from './NavMenu'

const Navigation: React.FC = () => {
  return (
    <Flex as="header" flexDirection="row" alignItems="center" color="black" px={6} py={[3, null, null, 6]}>
      <Container display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box mr={6} userSelect="none">
          <Link href="/">
            <a>
              <Img alt="WWWID" src="/static/logo.svg" height={['40px', null, null, '54px']} />
            </a>
          </Link>
        </Box>
        <Box as="nav">
          <NavMenu menuItems={menuItems} />
        </Box>
      </Container>
    </Flex>
  )
}

export default Navigation
