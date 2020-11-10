import { Box, BoxProps, Heading } from '@chakra-ui/core'
import * as React from 'react'
import { TalkDetail } from '~/types/common'
import { SpeakerList } from '../speakers'
import HomepageSection from './HomepageSection'

interface HomepageSpeakersProps extends BoxProps {
  talks: TalkDetail[]
}

const HomepageSpeakers: React.FC<HomepageSpeakersProps> = ({ talks, ...rest }) => {
  return (
    <HomepageSection {...rest}>
      <Box>
        <Heading size="xl" textAlign="center">
          Pembicara
        </Heading>
        <Box as="hr" my={8} borderTop="4px solid" borderTopColor="black" width="56px" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
        <SpeakerList talks={talks} />
      </Box>
    </HomepageSection>
  )
}

export default HomepageSpeakers
