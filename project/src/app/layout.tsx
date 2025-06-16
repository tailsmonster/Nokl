import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nőkl",
  description: "Connect with other developers and share your games!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
