import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL("https://globalaisummit.isfnetwork.org"), 

  title: 'ISF Global AI Summit 2025 | Future of AI & Leadership',
  description:
    'Join top AI leaders, innovators, and strategists at the ISF Global AI Summit 2025 in Austin, Texas. Explore the future of artificial intelligence, leadership, and cutting-edge technology.',
  keywords:
    'AI Summit 2025, Artificial Intelligence Conference, AI Leadership, Future of AI, AI Strategy, Tech Conference, Machine Learning, Deep Learning, ISF AI Summit',
  author: 'ISF Global',

  openGraph: {
    title: 'ISF Global AI Summit 2025 | Future of AI & Leadership',
    description:
      'Join top AI leaders, innovators, and strategists at the ISF Global AI Summit 2025 in Austin, Texas. Explore the future of artificial intelligence, leadership, and cutting-edge technology.',
    type: 'website',
    url: 'https://globalaisummit.isfnetwork.org/',
    images: [
      {
        url: 'https://globalaisummit.isfnetwork.org/ai-summit-og.png', 
        width: 1200,
        height: 630,
        alt: 'ISF Global AI Summit 2025 Banner',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ISF Global AI Summit 2025 | Future of AI & Leadership',
    description:
      'Join top AI leaders, innovators, and strategists at the ISF Global AI Summit 2025 in Austin, Texas. Explore the future of artificial intelligence, leadership, and cutting-edge technology.',
    creator: '@theISFnetwork', 
    images: ['https://globalaisummit.isfnetwork.org/ai-summit-og.png'], 
  },
};

// Structured data for SEO (Event Schema)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "ISF Global AI Summit 2025",
  "startDate": "2025-05-29",
  "endDate": "2025-05-30",
  "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Austin, Texas",
    "address": "Austin, TX, USA"
  },
  "image": "https://globalaisummit.isfnetwork.org/ai-summit-og.png",
  "description": "Join top AI leaders, innovators, and strategists at the ISF Global AI Summit 2025.",
  "organizer": {
    "@type": "Organization",
    "name": "ISF Network",
    "url": "https://www.isfnetwork.org/"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://globalaisummit.isfnetwork.org/" />
        <link rel="icon" href="/isf-favicon.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="ISF Global AI Summit 2025 | Future of AI & Leadership" />
        <meta property="og:description" content="Join top AI leaders, innovators, and strategists at the ISF Global AI Summit 2025 in Austin, Texas. Explore the future of artificial intelligence, leadership, and cutting-edge technology." />
        <meta property="og:url" content="https://globalaisummit.isfnetwork.org/" />
        <meta property="og:image" content="https://globalaisummit.isfnetwork.org/ai-summit-og.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ISF Global AI Summit 2025 | Future of AI & Leadership" />
        <meta name="twitter:description" content="Join top AI leaders, innovators, and strategists at the ISF Global AI Summit 2025 in Austin, Texas. Explore the future of artificial intelligence, leadership, and cutting-edge technology." />
        <meta name="twitter:image" content="https://globalaisummit.isfnetwork.org/ai-summit-og.png" />

        {/* Structured Data for Event Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
