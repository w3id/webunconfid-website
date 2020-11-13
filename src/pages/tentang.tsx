import * as React from 'react'
import { NextPage } from 'next'
import { Box, Stack, Text } from '@chakra-ui/core'

import { LayoutRoot, Navigation, Content, Page, PageHeader, PageBody } from '~/components/layout'

const MAX_CONTAINER_WIDTH = '60ch'

const AboutPage: NextPage = () => {
  return (
    <LayoutRoot>
      <Navigation />
      <Content>
        <Page>
          <Box as="section">
            <PageHeader
              title="Apa Itu WWWID?"
              image="/static/logo.svg"
              _containerProps={{ maxWidth: MAX_CONTAINER_WIDTH }}
              _imgProps={{ maxWidth: 366, alt: 'WWWID' }}
            />
            <PageBody textAlign="center" _containerProps={{ maxWidth: MAX_CONTAINER_WIDTH }}>
              <Stack spacing={4}>
                <Text fontSize="lg">
                  Kami melihat bahwa web adalah medium masa depan untuk menghubungkan pengguna dengan informasi dan layanan online. Namun
                  pengembang web di Indonesia sebagian besar masih tidak fokus mengembangkan web yang ditujukan untuk kenyamanan pengguna.
                  Pengembang web Indonesia masih sekedar membuat web mereka bisa diakses tanpa peduli apakah web tersebut bisa memberikan
                  layanan yang baik bagi penggunanya.
                </Text>
                <Text fontSize="lg">
                  Untuk itu kami komunitas pengembang web modern Indonesia mencoba memberikan edukasi bagi para pengembang web Indonesia
                  melalui pengembangan konten, diskusi online, serta meetup offline. Harapannya para pengembang web terutama bagi yang
                  terkendala dalam mempelajari konten berbahasa Inggris bisa menjadikan WWWID sebagai media pembelajaran agar bisa membuat
                  web modern yang fokus pada kenyamanan pengguna web menggunakan API dan teknologi baru yang terus berkembang.
                </Text>
              </Stack>
            </PageBody>
          </Box>
          <Box as="section">
            <PageHeader title="Unconference Untuk Komunitas Pengembang Web Indonesia" _containerProps={{ maxWidth: MAX_CONTAINER_WIDTH }} />
            <PageBody textAlign="center" _containerProps={{ maxWidth: MAX_CONTAINER_WIDTH }}>
              <Stack spacing={4}>
                <Text fontSize="lg">
                  Indonesia adalah negara besar dengan pertumbuhan industri startup yang sangat cepat. Tapi pertumbuhan ini tidak dibarengi
                  dengan pertumbuhan suplai talenta. Bahkan lulusan universitas belum memenuhi kebutuhan standar industri. Karena itu
                  komunitas di sini memainkan peran yang sangat penting untuk mengembangkan talenta kita dan menyiapkan mereka untuk siap
                  dengan standar industri.
                </Text>
                <Text fontSize="lg">
                  Bootcamp ini diperuntukkan untuk kalian yang aktif di komunitas pengembang web Indonesia sehingga kita bisa saling
                  mengenal satu sama lain dan bersama-sama berdiskusi untuk membuat para pengembang web di Indonesia bisa membuat web yang
                  lebih baik.
                </Text>
                <Text fontSize="lg">
                  Bootcamp ini adalah yang kedua kalinya setelah tahun lalu kami mengadakan event serupa di Yogyakarta. Dan fokus utama kami
                  untuk tahun ini adalah bagaimana komunitas web bisa bersama-sama meningkatkan kemampuan dan produktifitas anggota
                  komunitasnya.
                </Text>
              </Stack>
            </PageBody>
          </Box>
        </Page>
      </Content>
    </LayoutRoot>
  )
}

export default AboutPage
