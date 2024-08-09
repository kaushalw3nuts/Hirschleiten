import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/fonts.css';
import "@/styles/globals.css";
import '@/styles/responsive.css';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }) {

  useEffect( () => {

    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });
    };

    loadLocomotiveScroll();

    gsap.set(".fadeInUp", {y: "30%", opacity: 0,});
    ScrollTrigger.batch(".fadeInUp", {
      onEnter: batch => gsap.to(batch, { opacity: 1, duration: .8, delay:0.5, stagger: 0.2, y: 0 }),
    });
  }, [])
  
  const route = useRouter();
  const is404Page = route.isFallback || route.pathname == '/404';

  return (
    <>
      <main className="main_wrap" data-scroll-container>
        { !is404Page && <Header /> }
        <Component {...pageProps} />
        { !is404Page && <Footer /> }
      </main>
    </>
  )
}