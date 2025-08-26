import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security Policy | Joel Hagvall',
  description: 'Security policy and responsible disclosure guidelines for Joel Hagvall\'s personal website.',
  openGraph: {
    title: 'Security Policy | Joel Hagvall',
    description: 'Security policy and responsible disclosure guidelines for Joel Hagvall\'s personal website.',
    type: 'website',
  },
}

export default function SecurityPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
