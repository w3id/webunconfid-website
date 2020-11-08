import { ListProps, UnorderedList } from '@chakra-ui/core'
import * as React from 'react'
import { NavLinkItem } from '~/types/common'
import NavMenuItem from './NavMenuItem'

interface NavMenuProps extends ListProps {
  menuItems: NavLinkItem[]
}

const NavMenu: React.FC<NavMenuProps> = ({ menuItems, ...rest }) => {
  return (
    <UnorderedList styleType="none" display={['none', null, null, 'inline-flex']} m={0} {...rest}>
      {menuItems.map(item => (
        <NavMenuItem key={item.name} item={item} />
      ))}
    </UnorderedList>
  )
}

export default NavMenu
