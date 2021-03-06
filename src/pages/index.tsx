import * as React from 'react'
import { Box, Flex, Heading, Text, Img, Button, Stack, Grid } from '@chakra-ui/core'
import { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'

import { LayoutRoot, Navigation, Content } from '~/components/layout'
import { HomepageHero, HomepageSection } from '~/modules/home'
import { getSpeakersList } from '~/modules/speakers'
import siteMetadata from '~/_data/siteMetadata.json'

export const getStaticProps = async () => {
  const talks = await getSpeakersList()

  return {
    props: { talks }
  }
}

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>

const IndexPage: NextPage<IndexPageProps> = () => {
  const { title, description } = siteMetadata

  return (
    <LayoutRoot title="Home" titleTemplate={`${title} · ${description}`}>
      <Navigation />
      <Content>
        <HomepageHero>
          <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
            <Box>
              <Heading as="h1" mb={4} size="2xl">
                WebUnconf 2020
              </Heading>
              <Text fontSize="xl">Web Community Unconference</Text>
              <Text fontSize="xl">Desember 2020</Text>
              <Button
                as="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfPnjyp7ckO3TExXM_xPD5ZUAw7NqONs3lMJT_mxbAeWsjjDg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                mt={6}
                colorScheme="brand"
                size="lg"
              >
                Call for Submission
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
              <Heading size="xl">Unconference Untuk Komunitas Pengembang Web Indonesia</Heading>
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
          <Flex flexDirection="row" alignItems="center" justifyContent="center">
            <Box>
              <Box mb={8} textAlign="center">
                <Heading size="xl" id="categories">
                  Kategori
                </Heading>
                <Box as="hr" my={8} mx="auto" borderTop="4px solid" borderTopColor="black" width="56px" />
              </Box>
              <Grid gridGap={8} maxWidth={800}>
                <Stack spacing={4}>
                  <Heading as="h3" size="md">
                    Trend dan Perkembangan Teknologi Web
                  </Heading>
                  <Text>
                    Teknologi web tahun ini makin mendekati apa yang bisa kita lakukan di aplikasi native. Bahkan beberapa aplikasi
                    professional mulai digantikan oleh aplikasi web. Sebut saja Figma yang menjadi aplikasi wajib para designer user
                    interface. Dan bisa jadi ke depannya akan muncul aplikasi serupa berbasis web yang akan menggantikan peran aplikasi
                    native. Sehingga tidak perlu lagi sebuah aplikasi dibatasi oleh OS ataupun keterbatasan storage karena keharusan
                    instalasi sebelum digunakan.
                  </Text>
                  <Text>
                    Bagaimana tren pengembangan web, dan kira-kira aplikasi seperti apa yang ke depannya akan bermunculan menggunakan
                    teknologi web? Daftarkan topik yang membahas hal-hal terkait teknologi web dan implementasinya. Dan jelaskan mengapa
                    topik tersebut menarik untuk dibahas?
                  </Text>
                </Stack>
                <Stack spacing={4}>
                  <Heading as="h3" size="md">
                    Memulai dan Mengelola Komunitas Web
                  </Heading>
                  <Text>
                    Komunitas web berkembang cukup pesat di Indonesia namun di era pandemic tahun ini memaksa beberapa komunitas beradaptasi
                    untuk tetap bisa berbagi pengetahuan dan berinteraksi dengan sesama pengembang web. Namun mengelola komunitas tidaklah
                    mudah, terutama dari sisi komitmen dan sumber daya yang terbatas.
                  </Text>
                  <Text>
                    Bagaimana komunitas bisa bertahan dan bahkan terus mengembangkan komunitasnya? Apa saja tantangan dalam memulai dan
                    mengelola komunitas web terutama di daerah tanpa dukungan infrastruktur yang terbatas? Daftarkan topik yang perlu
                    dibahas, dan jelaskan mengapa kamu ingin mengetahui lebih jauh terkait topik tersebut.
                  </Text>
                </Stack>
                <Stack spacing={4}>
                  <Heading as="h3" size="md">
                    Belajar dan Berkembang Lewat Komunitas Untuk Programmer Pemula
                  </Heading>
                  <Text>
                    Sebagian besar programmer jaman sekarang sudah lebih mudah untuk memulai belajar pengembangan web melalui coding
                    bootcamp atau online learning yang jumlahnya sudah cukup banyak. Namun kemudahan mengakses konten pembelajaran ini
                    justru membuat pengembang kehilangan kemampuan dasarnya, yaitu belajar mandiri, menganalisa masalah, dan menemukan
                    solusinya.
                  </Text>
                  <Text>
                    Para pengembang banyak yang lupa bahwa kemampuan utama membaca dokumentasi, dan merancang solusi adalah fundamental
                    dasar yang kadang tidak diajarkan di coding bootcamp atau kursus online. Untuk itulah komunitas bisa menjadi tempat
                    belajar lanjutan untuk bisa mendapatkan akses ke pengalaman dan pengetahuan para pengembang senior.
                  </Text>
                  <Text>
                    Apa yang kamu ingin tahu terkait menjadikan komunitas sebagai tempat berkembang bersama? Daftarkan topi dan jelaskan
                    mengapa hal tersebut berguna untuk para pengembang pemula.
                  </Text>
                </Stack>
              </Grid>
            </Box>
          </Flex>
        </HomepageSection>
      </Content>
    </LayoutRoot>
  )
}

export default IndexPage
