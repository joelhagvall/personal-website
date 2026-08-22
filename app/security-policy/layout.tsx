import type { Metadata } from 'next'
import { OG_IMAGE, PERSON, SITE } from '@/data/site'

const url = `${SITE.url}/security-policy`;
const title = `Security Policy - ${PERSON.name} | Responsible Disclosure`;
const description = `Security policy and responsible disclosure guidelines for ${PERSON.name}'s personal website. Learn how to report security vulnerabilities and view our commitment to keeping user data safe.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
    languages: {
      en: url,
      "x-default": url,
    },
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url,
    siteName: SITE.name,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [OG_IMAGE.url],
  },
}

export default function SecurityPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
