
import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: {
      url: '/icons/tool.svg',
      type: 'image/svg+xml',
    },
  },
};

export default function ContentCreationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
