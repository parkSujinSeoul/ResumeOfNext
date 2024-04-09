import LNB from '@/container/LNB'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <LNB/>
        {children}
      </body>
    </html>
  );
}
