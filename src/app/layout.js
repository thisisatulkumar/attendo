import "./globals.css";

import { AuthProvider } from "@/context/authContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Attendo - Attendance Tracker",
    description: "Best attendance tracker for students",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <Navbar />

                    <main>
                        {children}
                    </main>

                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
