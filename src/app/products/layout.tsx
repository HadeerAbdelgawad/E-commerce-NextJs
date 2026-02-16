
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="mx-auto mt-25">{children}</div>

  );
}
