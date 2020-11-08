import * as React from 'react'
import { InferGetStaticPropsType, NextPage } from 'next'

import { LayoutRoot, Navigation, Content, Page, PageHeader, PageBody } from '~/components/layout'
import { getSpeakersList, SpeakerList } from '~/modules/speakers'

const MAX_CONTAINER_WIDTH = 952

export const getStaticProps = async () => {
  const talks = await getSpeakersList()

  return {
    props: { talks }
  }
}

type SpeakersPageProps = InferGetStaticPropsType<typeof getStaticProps>

const SpeakersPage: NextPage<SpeakersPageProps> = ({ talks }) => {
  return (
    <LayoutRoot>
      <Navigation />
      <Content>
        <Page>
          <PageHeader title="Pembicara" _containerProps={{ maxWidth: MAX_CONTAINER_WIDTH }} />
          <PageBody>
            <SpeakerList talks={talks} />
          </PageBody>
        </Page>
      </Content>
    </LayoutRoot>
  )
}

export default SpeakersPage
