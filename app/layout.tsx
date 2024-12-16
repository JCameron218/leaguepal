import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@mui/material";
import dotenv from "dotenv";
import Navigation from "@components/nav/Navigation";
import Footer from "@components/footer/Footer";

dotenv.config();

export const metadata: Metadata = {
  title: "League Pal",
  description: "The future of league management and administration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          <Container sx={{ height: '100%', pt: 4 }}>
            {children}
          </Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
