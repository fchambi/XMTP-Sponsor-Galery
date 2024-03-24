import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Image Frame',
  description: 'A Farcaster Frame gallery',
  openGraph: {
    title: 'Image Frame',
    description: 'A Farcaster Frame gallery',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qma1TxJo8QbeA6Mgjkg3E7owbbTsRM2Cz816DLhzasgb1Z/0.png`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qma1TxJo8QbeA6Mgjkg3E7owbbTsRM2Cz816DLhzasgb1Z/0.png`,
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=1`,
    'fc:frame:button:1': 'START NOW!!!',
    'of:accepts:xmtp': '2024-02-01',
  },
}

export default function Page() {
  return (
    <div>
      <h1>Gallery Frame</h1>
    </div>
  )
}
