import type { Metadata } from 'next'
import { PERSON, SITE } from '@/data/site'

const url = `${SITE.url}/security-policy`;
const title = `Security Policy – ${PERSON.name} | Responsible Disclosure`;
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
    images: [
      {
        url: PERSON.avatar,
        width: 1200,
        height: 630,
        alt: PERSON.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [PERSON.avatar],
  },
}

export default function SecurityPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
