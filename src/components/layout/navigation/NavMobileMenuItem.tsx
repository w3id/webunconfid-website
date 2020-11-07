import { ListItem, Link as ChakraLink, ListItemProps, LinkProps as ChakraLinkProps } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as React from 'react'
import { NavLinkItem } from '~/types/common'

interface NavMobileMenuItemProps extends ListItemProps {
  _linkProps?: ChakraLinkProps
  item: NavLinkItem
}

const NavMobileMenuItem: React.FC<NavMobileMenuItemProps> = ({ item, _linkProps, ...rest }) => {
  const router = useRouter()

  return (
    <ListItem {...rest}>
      <Link href={item.href} passHref>
        <ChakraLink
          display="block"
          px="0.8rem"
          py="0.4rem"
          fontWeight={router.asPath === item.href ? 700 : 400}
          _hover={{ backgroundColor: 'gray.100' }}
          _focus={{ backgroundColor: 'gray.100' }}
          {..._linkProps}
        >
          {item.name}
        </ChakraLink>
      </Link>
    </ListItem>
  )
}

export default NavMobileMenuItem
