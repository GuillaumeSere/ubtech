import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar'; // <-- Import de la Navbar
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UBTECH Robotics - Expérience 3D',
  description: 'Découvrez les robots Walker et Cruzr en 3D interactif',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar /> 
        {children}
        <Footer /> 
      </body>
    </html>
  );
}