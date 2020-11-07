import { Grid } from '@chakra-ui/core'
import * as React from 'react'
import { TalkDetail } from '~/types/common'
import ScheduleListItem from './ScheduleListItem'

interface ScheduleListProps {
  talks: TalkDetail[]
}

const ScheduleList: React.FC<ScheduleListProps> = ({ talks }) => {
  return (
    <Grid as="ul" py={8} gridGap={[6, null, null, 12]} gridTemplateColumns={['1fr', null, 'repeat(2, 1fr)']}>
      {talks.map(talk => (
        <ScheduleListItem key={talk.date} talk={talk} />
      ))}
    </Grid>
  )
}

export default ScheduleList
