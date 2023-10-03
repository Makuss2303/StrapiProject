
import React from "react"
import { Metadata } from "next"
import Header from "@/components/templates/header"
import Footer from "@/components/templates/footer"
import BackToTop from "@/components/atoms/backToTop"
import { Noto_Sans_JP } from 'next/font/google'

const noto_sans_jp = Noto_Sans_JP({
  display: 'swap',
  weight: ['400', '500', '700', '900'],
  preload: false,
})

export const metadata: Metadata = {
  title: {
    absolute: 'ヘッドレスCMSの開発・構築サービス　‐　株式会社Wakka Inc.',
  },
  description: 'サイトの高速化と堅牢なセキュリティ対策を同時に叶えるヘッドレスCMS開発サービスです。Wakka Inc.ではクラウド、オンプレに関わらずさまざまなヘッドレスCMS開発が可能です。お気軽にお問い合わせください。',
  openGraph: {
    title: 'ヘッドレスCMSの開発・構築サービス　‐　株式会社Wakka Inc.',
    description: 'サイトの高速化と堅牢なセキュリティ対策を同時に叶えるヘッドレスCMS開発サービスです。Wakka Inc.ではクラウド、オンプレに関わらずさまざまなヘッドレスCMS開発が可能です。お気軽にお問い合わせください。',
    url: 'hdls-lp.wakka-inc.com',
    siteName: 'Wakka',
    images: [
      {
        url: 'https://wakka-headless-lp.assets.newt.so/v1/3ae4a3c6-90c9-40ee-928b-f02b2a99895d/illustration_1.png',
        width: 672,
        height: 592,
        alt: 'Wakka Inc'
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ヘッドレスCMSの開発・構築サービス　‐　株式会社Wakka Inc.',
    description: 'サイトの高速化と堅牢なセキュリティ対策を同時に叶えるヘッドレスCMS開発サービスです。Wakka Inc.ではクラウド、オンプレに関わらずさまざまなヘッドレスCMS開発が可能です。お気軽にお問い合わせください。',
    images: {
      url: 'https://wakka-headless-lp.assets.newt.so/v1/3ae4a3c6-90c9-40ee-928b-f02b2a99895d/illustration_1.png',
      alt: 'Wakka Inc'
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

import "@/assets/styles/globals.scss"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        <Header />
        <main>{children}</main>
        <BackToTop/>
        <Footer />
      </body>
    </html>
  )
}
