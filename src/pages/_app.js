import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/fonts.css';
import "@/styles/globals.css";
import '@/styles/responsive.css';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }) {

  return (
    <>
      <main className="main_wrap">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}