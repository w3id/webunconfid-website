import { Box, Link, Stack, Text } from '@chakra-ui/core'
import * as React from 'react'
import Container from './Container'

const Footer: React.FC = () => {
  return (
    <Box as="footer" px={6} py={12}>
      <Container>
        <Stack spacing={4} textAlign="center">
          <Text fontSize="sm">
            Dikembangkan oleh tim{' '}
            <Link isExternal href="https://wwwid.org/">
              WWWID
            </Link>
            . Kode sumber tersedia di GitHub.
          </Text>
          <Text fontSize="sm">
            Gabung grup diskusi kami di{' '}
            <Link isExternal href="https://t.me/wwwid_pwa">
              Telegram
            </Link>{' '}
            dan{' '}
            <Link isExternal href="https://wwwid.org/">
              baca artikel-artikel kami
            </Link>
            .
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
