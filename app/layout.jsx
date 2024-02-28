import '@/assets/styles/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
    title: 'Property Pulse | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
}

export default function MainLayout({ children }) {
    return (
        <AuthProvider>
            <html lang={'en'}>
                <body className={'flex flex-col min-h-screen'}>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    )
}