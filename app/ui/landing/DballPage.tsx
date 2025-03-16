import { bebas, roboto } from "../fonts"
import DBALL from './dball'

export default function DballPage() {

    return (
        <div className={`${bebas.className} flex flex-col items-center`}>
            <div className="h-60">
              <DBALL 
              text="DBALL"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[250px] mb-8"
              />
            </div>
            <div className={`${roboto.className} text-[15px] text-center w-200 text-[25px] font-bold`}>
              Bienvenido al ecosistema dball, donde el epicentro es el baloncesto y los satélites son la mentalidad incansable, la mejora diaria en todas las áreas y conseguir tu mejor físico
            </div>
          </div>
    )
}