import { Inter } from 'next/font/google';
import Search from './components/Search';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <main className={inter.className + " flex min-h-screen flex-col items-center justify-evenly pb-72"}>
      <h1 className="pl-8 text-sky-500 transition-all duration-300 hover:font-extrabold hover:scale-[1.05] hover:text-emerald-500 text-7xl font-bold">Welcome to Wikilive</h1>
      <Search />
      <Footer />
    </main>

  );
}
