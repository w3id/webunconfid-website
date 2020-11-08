import { Link, List, ListItem, Text } from '@chakra-ui/core'
import * as React from 'react'

export const P: React.FC<JSX.IntrinsicElements['p']> = ({ children, ...rest }) => {
  return (
    <Text as="p" {...rest}>
      {children}
    </Text>
  )
}

export const Anchor: React.FC<JSX.IntrinsicElements['a']> = ({ children, href, ...rest }) => (
  <Link href={href} isExternal={href?.substring(0, 4) === 'http'} color="brand.500" _hover={{ backgroundColor: 'brand.600' }} {...rest}>
    {children}
  </Link>
)

export const UL: React.FC<JSX.IntrinsicElements['ul']> = ({ children, ...rest }) => {
  return (
    <List styleType="disc" {...rest}>
      {children}
    </List>
  )
}

export const OL: React.FC<JSX.IntrinsicElements['ol']> = ({ children, ...rest }) => {
  return (
    <List as="ol" styleType="decimal" {...rest}>
      {children}
    </List>
  )
}

export const LI: React.FC<JSX.IntrinsicElements['li']> = ({ children, ...rest }) => {
  return (
    <ListItem ml={6} {...rest}>
      {children}
    </ListItem>
  )
}
