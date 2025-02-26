import NavBar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const fontSans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lucas Guidi | Desenvolvedor Front-End',
  description:
    'Desenvolvedor Front-End especializado em React.js e Next.js. Crio aplicações web modernas, performáticas e com excelência técnica.',
  keywords: [
    'Front-End Developer',
    'React.js',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Desenvolvimento Web',
    'Portfólio',
    'Interface de Usuário',
    'Web Performance',
    'SEO Técnico',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${fontSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
