import { Inter, Poppins } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Gilgit Tourism - Explore the Beauty of Gilgit-Baltistan",
  description:
    "Discover breathtaking tours, packages, and car rentals in Gilgit-Baltistan. Your gateway to the majestic mountains of Pakistan.",
  generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
