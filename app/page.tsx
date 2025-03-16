import Image from "next/image";
import { bebas, roboto } from "./ui/fonts"; 
import DballPage from './ui/landing/DballPage'
// import Comunidad from './ui/landing/comunidad'
// import Mentality from './ui/landing/mentality'
// import Academy from './ui/landing/academy'
// import Vert from './ui/landing/vert'
// import App from './ui/landing/app'
// import Bts from './ui/landing/bts'
import Footer from "./ui/landing/footer";

export default function Home() {
  return (
    
    <div className="items-center justify-items-center h-full p-8 pb-20 gap-16 sm:p-20">
      
      <main className="flex flex-col justify-center items-center sm:items-start">
        
        <div id='dball' className="w-full pb-75 flex flex-col items-center justify-items-center">
          <DballPage/>
        </div>

        <div id='community'>
          {/* <Comunidad/> */}
        </div>

        <div id='mentality'>
          {/* <Mentality/> */}
        </div>
        
        <div id='academy'>
          {/* <Academy/> */}
        </div>

        <div id='vert'>
          {/* <Vert/> */}
        </div>

        <div id="app">
          {/* <App/> */}
        </div>

        <div id='bts' className="snap-start">
          {/* <Bts/> */}
        </div>
        
      </main>
      <Footer/>
    </div>
  );
}