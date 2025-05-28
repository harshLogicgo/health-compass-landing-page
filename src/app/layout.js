import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./app.css";
import Header from "@/components/Header";
import Script from "next/script";
import MailchimpForm from "@/components/MailChimpForm";
import AOSInitializer from "@/components/AOSInitializer";
import Footer from "@/components/Footer";
import { Images } from "@/data/images";
import { createMetadata } from "@/helpers/commonHelpers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = async () => {
  return createMetadata({
    img: Images.logo2,
    title: "Health Compass: Your Personal Health Companion",
    description:
      "Easily track supplements, get personalized health tips, and connect with doctors. Designed for seniors to manage wellness with AI insights and daily planning.",
  });
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <AOSInitializer /> */}
        <Header />
        {children}
        {/* <MailchimpForm /> */}
        <Footer />

        {/* 📌 Meta Pixel Script */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '904434125141937');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* 📌 noscript fallback for non-JS users */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
      height="1"
      width="1"
      style="display:none"
      src="https://www.facebook.com/tr?id=904434125141937&ev=PageView&noscript=1"
      alt=""
    />`,
          }}
        />
      </body>
    </html>
  );
}
