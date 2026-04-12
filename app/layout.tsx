import "./globals.css";

export const metadata = {
  title: "Archiva | Secure Dashboard",
  description: "Advanced Next.js Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
