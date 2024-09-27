import React from 'react'
import { useState } from "react"

function useDarkMode  () {
    const [theme, setTheme]= useState(localStorage.theme)
 
}

export default useDarkMode