import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Foundations from './components/Foundations';
import Causes from './components/Causes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home - Gozi Africa | Empowering Communities Across Africa",
  description: "Welcome to Gozi Africa. Join our mission to create sustainable change across African communities through education, healthcare, and agricultural initiatives. Support children and build a brighter future.",
  openGraph: {
    title: "Home - Gozi Africa | Empowering Communities Across Africa",
    description: "Welcome to Gozi Africa. Join our mission to create sustainable change across African communities through education, healthcare, and agricultural initiatives.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Children in Africa - Gozi Africa Homepage",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Gallery />
        <Foundations />
        <Causes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
