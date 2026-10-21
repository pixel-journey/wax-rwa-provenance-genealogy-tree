import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Owners you listed',
  description: 'alice, bob, alice is two hops. An immediate repeat is refused. One unsigned AtomicAssets transfer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
