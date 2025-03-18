import Link from "next/link";
import { bebas } from "./fonts";

export default function Navbar() {
    return (
      <div className="flex justify-center">
        <nav className="sticky top-10 w-200 z-10 bg-black-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-xl self-center my-8 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ">
        <div className="max-w-6xl mx-auto">
          <div className={`${bebas.className} flex items-center justify-between h-16`}>
          <Link href="/" className="text-2xl p-5 text-white font-semibolde transition duration-300 ease-in-out hover:scale-110">
              DBALL
            </Link>
            <section className={`flex space-x-4 text-2xl text-white p-5`}>
            <Link href="/#community" className="blur transition duration-300 ease-in-out hover:scale-115">
              Comunidad
            </Link>
            <Link href="/#mentality" className="blur transition duration-300 ease-in-out hover:scale-115">
              Mentality
            </Link>
            <Link href="/#academy" className="blur transition duration-300 ease-in-out hover:scale-115">
              Academy
            </Link>
            <Link href="/vert" className="transition duration-300 ease-in-out hover:scale-115">
              Vert
            </Link>
            <Link href="/#app" className="blur transition duration-300 ease-in-out hover:scale-115">
              App
            </Link>
            <Link href="/#bts" className="blur transition duration-300 ease-in-out hover:scale-115">
              BTS
            </Link>
          </section> 
          </div>
        </div>
      </nav>
      </div>
      
    );
  }