import type { Metadata } from 'next'
import { OG_IMAGE, PERSON, SITE } from '@/data/site'

const url = `${SITE.url}/security-policy`;
const title = `Security Policy - ${PERSON.name} | Responsible Disclosure`;
const description = `How to report a security issue on ${PERSON.name}'s website, what to include in the report and how responsible disclosure works here.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
    languages: {
      en: url,
      "x-default": url,
    },
    types: {
      "text/markdown": `${url}.md`,
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
