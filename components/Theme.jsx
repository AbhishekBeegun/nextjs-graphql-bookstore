import { useTheme } from "../contexts/ThemeContext"
import React from "react"
import {HiSun,HiMoon} from "react-icons/hi"
export function Theme() {
  const { theme, setTheme } = useTheme()

  function handleToggleTheme() {
    //reverse the theme value every time that "handleToggleTheme" is called
    setTheme(!theme)
  }

  return (
    <div title="Switch Mode" >

        { theme ? (
        <HiSun size={25} className="cursor-pointer" onClick={handleToggleTheme} color="orange"/>
        ): (
        <HiMoon size={25} className="cursor-pointer" onClick={handleToggleTheme} />
 
        ) }
      
    </div>
  )
}