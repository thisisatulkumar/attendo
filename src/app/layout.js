import "./globals.css";

import { AuthProvider } from "@/context/authContext";
import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Attendo - Attendance Tracker",
    description: "Best attendance tracker for students",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <AuthProvider>
                        <Navbar />

                        <main className="pt-16">
                            {children}
                        </main>
                        
                        <Footer />
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
