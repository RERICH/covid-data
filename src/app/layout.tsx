import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covid Data App",
  description: "Example application to check latest covid data ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
