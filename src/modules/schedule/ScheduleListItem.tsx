import { Heading, Stack, Text } from '@chakra-ui/core'
import { format } from 'date-fns'
import * as React from 'react'
import { TalkDetail } from '~/types/common'

interface ScheduleListItemProps {
  talk: TalkDetail
}

const ScheduleListItem: React.FC<ScheduleListItemProps> = ({ talk }) => {
  return (
    <Stack as="li">
      <Text>{format(new Date(talk.date), 'HH:mm')} WIB</Text>
      <Heading as="h3" size="md">
        {talk.speaker}
      </Heading>
      <Text>{talk.title}</Text>
    </Stack>
  )
}

export default ScheduleListItem
