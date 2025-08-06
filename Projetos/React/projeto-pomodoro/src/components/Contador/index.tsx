import { TimerIcon } from "lucide-react"
import style from "./style.module.css"

export function Contador (){
    return <div className={style.contador}> 
        <a className={style['contador-link']} href="#"><TimerIcon/><span>Chronos</span>
        </a>
    </div>
}
