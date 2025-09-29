import "./globals.css";

import { AuthProvider } from "@/context/authContext";

export const metadata = {
    title: "Attendo - Attendance Tracker",
    description: "Best attendance tracker for students",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <main>
                        {children}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
