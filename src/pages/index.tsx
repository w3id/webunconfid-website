import * as React from 'react'
import { Box, Flex, Heading, Text, Img, Button, Stack } from '@chakra-ui/core'
import { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'

import { LayoutRoot, Navigation, Content } from '~/components/layout'
import { HomepageHero, HomepageSection } from '~/modules/home'
import { getSpeakersList, SpeakerList } from '~/modules/speakers'
import { ScheduleList } from '~/modules/schedule'

export const getStaticProps = async () => {
  const talks = await getSpeakersList()

  return {
    props: { talks }
  }
}

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>

const IndexPage: NextPage<IndexPageProps> = ({ talks }) => {
  return (
    <LayoutRoot>
      <Navigation />
      <Content>
        <HomepageHero>
          <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
            <Box>
              <Heading as="h1" mb={4} size="2xl">
                WebUnconf 2020
              </Heading>
              <Text fontSize="lg">Web Community Leaders Unconference</Text>
              <Text fontSize="lg">Sabtu, 29 November 2020</Text>
              <Text fontSize="lg">13.00 - 17.00 WIB</Text>
              <Button
                as="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfPnjyp7ckO3TExXM_xPD5ZUAw7NqONs3lMJT_mxbAeWsjjDg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                mt={9}
                colorScheme="brand"
                size="lg"
                width={200}
              >
                Daftar
              </Button>
            </Box>
            <Img
              display={['none', null, null, 'block']}
              alt="Header"
              src="/static/webunconfID-2k20-header.jpg"
              loading="lazy"
              width="100%"
              maxWidth={[460, null, null, null, 600]}
              borderRadius={[0, null, null, 48]}
            />
          </Flex>
        </HomepageHero>
        <HomepageSection>
          <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
            <Img
              display={['none', null, null, 'block']}
              alt="Header"
              src="/static/webunconfID-2k20-1.jpg"
              loading="lazy"
              width="100%"
              maxWidth={[400, null, null, null, 600]}
              borderRadius={[0, null, null, 36]}
            />
            <Box py={[0, null, null, 12]} pl={[0, null, null, 16]} pr={0} maxWidth={800}>
              <Heading size="xl">Unconference Untuk Aktivis Komunitas Pengembang Web Indonesia</Heading>
              <Box as="hr" my={8} borderTop="4px solid" borderTopColor="black" width="56px" />
              <Stack spacing={4}>
                <Text fontSize="lg">
                  Indonesia adalah negara besar dengan pertumbuhan industri startup yang sangat cepat. Tapi pertumbuhan ini tidak dibarengi
                  dengan pertumbuhan suplai talenta. Bahkan lulusan universitas belum memenuhi kebutuhan standar industri.
                </Text>
                <Text fontSize="lg">
                  Bootcamp ini diperuntukkan untuk kalian yang aktif di komunitas pengembang web Indonesia sehingga kita bisa saling
                  mengenal satu sama lain dan bersama-sama berdiskusi untuk membuat para pengembang web di Indonesia bisa membuat web yang
                  lebih baik.
                </Text>
              </Stack>
              <Link href="/tentang" passHref>
                <Button as="a" mt={9} colorScheme="brand" variant="outline" size="lg" width={200}>
                  Selengkapnya
                </Button>
              </Link>
            </Box>
          </Flex>
        </HomepageSection>
        <HomepageSection>
          <Box>
            <Heading size="xl" textAlign="center">
              Jadwal
            </Heading>
            <Box
              as="hr"
              my={8}
              borderTop="4px solid"
              borderTopColor="black"
              width="56px"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
            <ScheduleList talks={talks} />
          </Box>
        </HomepageSection>
        <HomepageSection>
          <Box>
            <Heading size="xl" textAlign="center">
              Pembicara
            </Heading>
            <Box
              as="hr"
              my={8}
              borderTop="4px solid"
              borderTopColor="black"
              width="56px"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
            <SpeakerList talks={talks} />
          </Box>
        </HomepageSection>
      </Content>
    </LayoutRoot>
  )
}

export default IndexPage
