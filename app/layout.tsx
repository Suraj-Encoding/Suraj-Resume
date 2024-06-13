import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from "react-toastify";
import { MetaData } from '@/Interface/constant/metadata';
import { ClerkProvider } from '@clerk/nextjs';
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = MetaData[0];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  )
}
