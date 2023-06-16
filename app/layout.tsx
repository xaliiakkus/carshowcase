import "./globals.css";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
export const metadata = {
  title: "Rente a Cars",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
