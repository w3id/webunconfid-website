import * as React from 'react'
import { Code } from '@chakra-ui/core'
import { HtmrOptions } from 'htmr'

import { Anchor, H1, H2, H3, H4, H5, H6, UL, LI, OL, P } from '~/components/layout/markdown'

const htmrTransform: HtmrOptions['transform'] = {
  p: P,
  a: Anchor,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ul: UL,
  ol: OL,
  li: LI,
  code: props => <Code {...props} />
}

export default htmrTransform
