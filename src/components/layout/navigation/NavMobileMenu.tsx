import { Box, IconButton, Popover, PopoverTrigger, PopoverContent, BoxProps, MenuProps, PopoverArrow } from '@chakra-ui/core'
import { HamburgerIcon } from '@chakra-ui/icons'
import * as React from 'react'
import { NavLinkItem } from '~/types/common'
import NavMobileMenuItem from './NavMobileMenuItem'

interface NavMobileMenuProps extends BoxProps {
  menuItems: NavLinkItem[]
  _menuProps?: MenuProps
}

const NavMobileMenu: React.FC<NavMobileMenuProps> = ({ menuItems, _menuProps, ...rest }) => {
  return (
    <Box display={['inline-flex', null, null, 'none']} m={0} {...rest}>
      <Popover placement="bottom-end" {..._menuProps}>
        <PopoverTrigger>
          <IconButton aria-label="Menu" variant="outline">
            <HamburgerIcon />
          </IconButton>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <Box as="ul" listStyleType="none">
            {menuItems.map(item => (
              <NavMobileMenuItem item={item} />
            ))}
          </Box>
        </PopoverContent>
      </Popover>
    </Box>
  )
}

export default NavMobileMenu
