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
        <div className="w-5/6 max-w-4xl mx-4 my-auto">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
