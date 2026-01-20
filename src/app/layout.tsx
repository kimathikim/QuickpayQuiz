import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { ReduxProvider } from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "StartGlobal Dashboard",
    description: "Dashboard for StartGlobal",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <ThemeRegistry>
                        {children}
                    </ThemeRegistry>
                </ReduxProvider>
            </body>
        </html>
    );
}
