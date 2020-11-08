import { TalkDetail } from '~/types/common'

async function getSpeakersList(): Promise<TalkDetail[]> {
  const { default: talks } = await import('~/_data/talks.json')
  return talks
}

export default getSpeakersList
