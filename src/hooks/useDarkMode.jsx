import React from 'react'
import { useEffect } from "react"
import { useState } from "react"

function useDarkMode  () {
    const [theme, setTheme]= useState(localStorage.theme)

    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(()=>{
        const root = window.document.documentElement
    })
 
}

export default useDarkMode