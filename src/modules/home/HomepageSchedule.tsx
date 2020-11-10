import { Box, BoxProps, Heading } from '@chakra-ui/core'
import * as React from 'react'
import { TalkDetail } from '~/types/common'
import { ScheduleList } from '../schedule'
import HomepageSection from './HomepageSection'

interface HomepageScheduleProps extends BoxProps {
  talks: TalkDetail[]
}

const HomepageSchedule: React.FC<HomepageScheduleProps> = ({ talks, ...rest }) => {
  return (
    <HomepageSection {...rest}>
      <Box>
        <Heading size="xl" textAlign="center">
          Jadwal
        </Heading>
        <Box as="hr" my={8} borderTop="4px solid" borderTopColor="black" width="56px" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
        <ScheduleList talks={talks} />
      </Box>
    </HomepageSection>
  )
}

export default HomepageSchedule
