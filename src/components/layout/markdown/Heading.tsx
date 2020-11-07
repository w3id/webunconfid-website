import * as React from 'react'
import { Heading } from '@chakra-ui/core'

export const H1: React.FC<JSX.IntrinsicElements['h1']> = ({ children, ...rest }) => (
  <Heading as="h1" size="xl" {...rest}>
    {children}
  </Heading>
)

export const H2: React.FC<JSX.IntrinsicElements['h2']> = ({ children, ...rest }) => (
  <Heading as="h2" size="lg" {...rest}>
    {children}
  </Heading>
)

export const H3: React.FC<JSX.IntrinsicElements['h3']> = ({ children, ...rest }) => (
  <Heading as="h3" size="md" {...rest}>
    {children}
  </Heading>
)

export const H4: React.FC<JSX.IntrinsicElements['h4']> = ({ children, ...rest }) => (
  <Heading as="h4" size="sm" {...rest}>
    {children}
  </Heading>
)

export const H5: React.FC<JSX.IntrinsicElements['h5']> = ({ children, ...rest }) => (
  <Heading as="h5" size="sm" {...rest}>
    {children}
  </Heading>
)

export const H6: React.FC<JSX.IntrinsicElements['h6']> = ({ children, ...rest }) => (
  <Heading as="h6" size="sm" {...rest}>
    {children}
  </Heading>
)
