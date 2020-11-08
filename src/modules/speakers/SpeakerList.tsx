import { Grid } from '@chakra-ui/core'
import * as React from 'react'

import { TalkDetail } from '~/types/common'
import SpeakerCard from './SpeakerCard'

interface SpeakerListProps {
  talks: TalkDetail[]
}

const SpeakerList: React.FC<SpeakerListProps> = ({ talks }) => {
  return (
    <Grid py={8} gridGap={[6, null, null, 12]} gridTemplateColumns={['1fr', null, 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>
      {talks.map(speaker => (
        <SpeakerCard key={speaker.date} talk={speaker} />
      ))}
    </Grid>
  )
}

export default SpeakerList
