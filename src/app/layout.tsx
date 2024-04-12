import LNB from '@/container/navigator/LNB';
import '../style/globals.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LNB />
        {children}
      </body>
    </html>
  );
}
