import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'UBTECH Robotics - Expérience 3D',
    description: 'Découvrez les robots Walker et Cruzr en 3D interactif,three.js, webgl, robot 3D, landing page 3D, ubtech, site immersif, 3D web,',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Delius&family=Orbitron:wght@400..900&display=swap" rel="stylesheet"></link>
                <meta name="google-site-verification" content="nwVPqsKRGvHVh9v-Qn4QoawQzNbN99Sfg6usOSlUEhg" />
                <meta property="og:title" content="UBTECH Robot 3D – Three.js" />
                <meta property="og:description" content="Une démo web immersive avec un robot 3D interactif réalisée en Three.js." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/home.jpg" />
                <meta property="og:url" content="https://ubtech-walker.vercel.app/" />
                <meta name="keywords" content="three.js, webgl, robot 3D, landing page 3D, ubtech, site immersif, 3D web, frontend, creative coding" />
                <meta name="author" content="Guillaume Tech" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Robot 3D UBTECH – Three.js Demo" />
                <meta name="twitter:description" content="Une démo web immersive avec un robot 3D interactif réalisée en Three.js." />
                <meta name="twitter:image" content="/images/home.jpg" />
            </head>
            <body className={inter.className}>
                <Navbar  />
                {children}
                <Footer />
            </body>
        </html>
    );
}