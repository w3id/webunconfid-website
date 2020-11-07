import { Box, Heading, Img, Stack, Text } from '@chakra-ui/core'
import * as React from 'react'
import { TalkDetail } from '~/types/common'

interface SpeakerCardProps {
  talk: TalkDetail
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ talk }) => {
  return (
    <Box textAlign="center">
      <Img mx="auto" mb={6} width={140} height={140} borderRadius={140} src={talk.photoUrl} alt={talk.speaker} />
      <Stack>
        <Heading as="h3" size="md" color="brand.500">
          {talk.speaker}
        </Heading>
        <Heading as="h4" size="sm">
          {talk.title}
        </Heading>
        <Text>{talk.description}</Text>
      </Stack>
    </Box>
  )
}

export default SpeakerCard
