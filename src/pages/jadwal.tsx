import * as React from 'react'
import { InferGetStaticPropsType, NextPage } from 'next'

import { LayoutRoot, Navigation, Content, Page, PageHeader, PageBody } from '~/components/layout'
import { getSpeakersList } from '~/modules/speakers'
import { ScheduleList } from '~/modules/schedule'

const MAX_CONTAINER_WIDTH = 952

export const getStaticProps = async () => {
  const talks = await getSpeakersList()

  return {
    props: { talks }
  }
}

type SchedulePageProps = InferGetStaticPropsType<typeof getStaticProps>

const SchedulePage: NextPage<SchedulePageProps> = ({ talks }) => {
  return (
    <LayoutRoot>
      <Navigation />
      <Content>
        <Page>
          <PageHeader title="Jadwal" _containerProps={{ maxWidth: MAX_CONTAINER_WIDTH }} />
          <PageBody>
            <ScheduleList talks={talks} />
          </PageBody>
        </Page>
      </Content>
    </LayoutRoot>
  )
}

export default SchedulePage
