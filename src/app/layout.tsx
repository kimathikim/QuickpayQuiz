import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { ReduxProvider } from "@/store/provider";
import "@fontsource/inter";

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
            <body>
                <ReduxProvider>
                    <ThemeRegistry>
                        {children}
                    </ThemeRegistry>
                </ReduxProvider>
            </body>
        </html>
    );
}
