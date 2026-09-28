import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChopdi from "./components/WhyChopdi";
import HowChopdiWorks from "./components/HowChopdiWorks";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChopdi />
      <HowChopdiWorks />
      <GetStarted />
      <Footer />
    </main>
  );
}
