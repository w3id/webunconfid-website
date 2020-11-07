import { ListItem, Link as ChakraLink, ListItemProps, LinkProps as ChakraLinkProps } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as React from 'react'
import { NavLinkItem } from '~/types/common'

interface NavMenuItemProps extends ListItemProps {
  _linkProps?: ChakraLinkProps
  item: NavLinkItem
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ item, _linkProps, ...rest }) => {
  const router = useRouter()

  return (
    <ListItem mx={3} {...rest}>
      <Link href={item.href} passHref>
        <ChakraLink color="inherit" fontWeight={router.asPath === item.href ? 700 : 400} {..._linkProps}>
          {item.name}
        </ChakraLink>
      </Link>
    </ListItem>
  )
}

export default NavMenuItem
