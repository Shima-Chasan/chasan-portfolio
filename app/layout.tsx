import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ちゃーさん｜AI×デザインで"時短"と"伝わる"をつくる',
  description: '名刺・ショップカード・EC・HP制作、AIで運用までラクに。鹿児島中心に全国オンライン対応。',
  openGraph: {
    title: 'ちゃーさん｜AI×デザインで"時短"と"伝わる"をつくる',
    description: '名刺・ショップカード・EC・HP制作、AIで運用までラクに。鹿児島中心に全国オンライン対応。',
    images: ['/ogp.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ちゃーさん｜AI×デザインで"時短"と"伝わる"をつくる',
    description: '名刺・ショップカード・EC・HP制作、AIで運用までラクに。鹿児島中心に全国オンライン対応。',
    images: ['/ogp.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="font-zen">
        {children}
      </body>
    </html>
  )
}
