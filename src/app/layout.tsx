import type { Metadata } from "next";
import "./tailwind.css";

export const metadata: Metadata = {
  title: "MINDDD - Collaborative Canvas",
  description: "Real-time collaborative canvas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased font-sans`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
