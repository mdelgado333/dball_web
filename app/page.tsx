import DballPage from './ui/landing/DballPage'
// import Comunidad from './ui/landing/comunidad'
// import Mentality from './ui/landing/mentality'
// import Academy from './ui/landing/academy'
// import Vert from './ui/landing/vert'
// import App from './ui/landing/app'
// import Bts from './ui/landing/bts'

export default function Home() {
  return (
    
    <div className="items-center justify-items-center h-full p-8 pb-20 gap-16 sm:p-20">
      
      <main className="flex flex-col justify-center items-center sm:items-start">
        
        <div id='dball' className="w-screen flex flex-col items-center justify-items-center">
          <DballPage/>
        </div>

        <div id=''>
          {/* <Comunidad/> */}
        </div>

        <div id=''>
          {/* <Mentality/> */}
        </div>
        
        <div id=''>
          {/* <Academy/> */}
        </div>

        <div id=''>
          {/* <Vert/> */}
        </div>

        <div id="">
          {/* <App/> */}
        </div>

        <div id=''>
          {/* <Bts/> */}
        </div>
        
      </main>
    </div>
  );
}