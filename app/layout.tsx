import { LanguageProvider } from '@/components/LanguageContext';
import "./globals.css";

export const metadata = {
  title: "Archiva | Secure Dashboard",
  description: "Advanced Next.js Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
