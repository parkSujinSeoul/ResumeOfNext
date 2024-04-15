import LNB from '@/container/navigator/LNB';
import '@/styles/globals.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LNB />
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-gray-100 rounded-md">
          {children}
        </div>
      </body>
    </html>
  );
}
