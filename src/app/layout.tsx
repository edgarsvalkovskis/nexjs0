export const metadata = {
  title: "eds website",
  description: "Content generated",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Hello World!</h1>
        {children}
      </body>
    </html>
  );
}
