import { HistoryIcon, HouseIcon, LucideSettings, Settings2Icon, SettingsIcon, SunMediumIcon, TimerIcon } from "lucide-react";
import style from "./style.module.css";

export function Menu(){
    return <nav className={style.menu}>
        <a className={style['menu-link']} href="#"><HouseIcon/></a>
        <a className={style['menu-link']} href="#"><HistoryIcon/></a>
        <a className={style['menu-link']} href="#"><LucideSettings/></a>
        <a className={style['menu-link']} href="#"><SunMediumIcon/></a>
    </nav>
}