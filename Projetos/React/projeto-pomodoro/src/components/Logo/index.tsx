import { TimerIcon } from "lucide-react"
import style from "./style.module.css"

export function Logo (){
    return <div className={style.logo}> 
        <a className={style['logo-link']} href="#"><TimerIcon/><span>Chronos</span>
        </a>
    </div>
}
