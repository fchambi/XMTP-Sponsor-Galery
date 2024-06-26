import { getFrameMetadata } from '@coinbase/onchainkit/frame'
import type { Metadata } from 'next'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Sign Up!',
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_SITE_URL}/site-preview.jpg`,
  },
  input: {
    text: 'Your Email',
  },
  postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/advanced`,
})

export const metadata: Metadata = {
  title: 'Email Frame',
  description: 'Another,email frame example',
  openGraph: {
    title: 'Advanced Frame',
    description: 'Another, more advanced frame example',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/site-preview.jpg`],
  },
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': '2024-02-01',
  },
}

export default function Page() {
  return (
    <>
      <h1>Advanced Frame</h1>
    </>
  )
}
