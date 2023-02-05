import { useTheme } from "../contexts/ThemeContext"

import {HiSun,HiMoon} from "react-icons/hi"
export function Theme() {
  const { theme, setTheme } = useTheme()

  function handleToggleTheme() {
    //reverse the theme value every time that "handleToggleTheme" is called
    setTheme(!theme)
  }

  return (
    <div className="" >

        { theme ? (
        <HiSun size={25} className="cursor-pointer" onClick={handleToggleTheme} color="orange"/>
        ): (
        <HiMoon size={25} className="cursor-pointer" onClick={handleToggleTheme} />
 
        ) }
      
    </div>
  )
}