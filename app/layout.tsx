import type { NextPage } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import StoreProvider from "./redux/StoreProvider";
import { ToastContainer } from "react-toastify";

interface Metadata {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const metadata: Metadata = {
  title:
    "Dheeraj Photo Point - Best Photography & Videography Services in Lucknow, India",
  description:
    "Dheeraj Photo Point offers top-notch Photography, Videography, Image retouching, Studio rental and more in Lucknow, Uttar Pradesh, India.",
  imageUrl: "/assets/Icons/logo.png",
  url: "https://www.dheerajphotopoint.com",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: NextPage<RootLayoutProps> = ({
  children,
}: RootLayoutProps) => {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          {/* Open Graph tags */}
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content={metadata.imageUrl} />
          <meta property="og:url" content={metadata.url} />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content={metadata.imageUrl} />
        </head>
        <body>
          <div>
            <div>{children}</div>
            <ToastContainer />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
};

export default RootLayout;
