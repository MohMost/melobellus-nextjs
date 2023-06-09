import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <meta
          name="og:title"
          content="Melobellus, Designer, illustrator, art teacher"
        />
        <meta
          name="keywords"
          content="Melobellus, Designer, illustrator, art teacher"
        />
        <meta
          name="google-site-verification"
          content="6OAdXE6BWoAYa2-NLMcgoJM4ysEeRjTzaxdmZbsOnaE"
        />
        <meta
          name="og:description"
          content="Un artiste et designer doué dans la création d'œuvres d'art numériques et traditionnelles, y compris l'aquarelle et la peinture à l'huile. Parcourez ma collection diversifiée d'œuvres d'art, qui comprend des logos, des icônes et bien plus encore créés à l'aide d'outils tels que Photoshop et Figma."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/937009208795230212/1091052338476757042/image.png"
        />
        <meta name="twitter:theme-color" content="#A020F0" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Melobellus</title>
      </head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
