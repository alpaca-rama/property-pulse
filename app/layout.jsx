import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import 'photoswipe/dist/photoswipe.css'
import '@/assets/styles/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import {GlobalProvider} from "@/context/GlobalContext";

export const metadata = {
    title: 'Property Pulse | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
}

export default function MainLayout({ children }) {
    return (
        <GlobalProvider>
            <AuthProvider>
                <html lang={'en'}>
                    <body className={'flex flex-col min-h-screen'}>
                        <Navbar />
                        <main>
                            {children}
                        </main>
                        <Footer />
                        <ToastContainer />
                    </body>
                </html>
            </AuthProvider>
        </GlobalProvider>
    )
}