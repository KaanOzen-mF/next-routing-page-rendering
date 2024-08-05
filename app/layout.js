import MainHeader from "@/components/main-header";
import "./globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-11/12 max-w-6xl mx-auto my-auto">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
