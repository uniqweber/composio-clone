import type {Metadata} from "next";
import {Tinos, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import LenisWrapper from "@/components/shared/lenisWrapper";

const tinos = Tinos({
    variable: "--font-tinos",
    weight: ["400", "700"],
    subsets: ["latin"],
});

const ibm = IBM_Plex_Serif({
    variable: "--font-ibm",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Composio - Simple Pricing for Real-World Scale",
    description:
        "Build agents that do more. Composio gives you APIs, SDKs, and prebuilt integrations to let your AI agents interact with apps like Slack, HubSpot, GitHub and beyond.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${tinos.variable} ${ibm.variable} `}>
                <Navbar />
                <LenisWrapper>
                    <main className="min-h-screen pt-17.5">{children}</main>
                </LenisWrapper>
                <Footer />
            </body>
        </html>
    );
}
