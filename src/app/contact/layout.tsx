import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | My Unbelievable Story',
    description: 'Contact the author of My Unbelievable Story.',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
