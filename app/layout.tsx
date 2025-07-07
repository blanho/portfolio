// This layout only applies to pages that don't match the locale pattern
// The middleware will handle redirecting to the appropriate locale
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
