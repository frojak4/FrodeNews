'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitcher = () => {

    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true);
        console.log(resolvedTheme);
    }, [])



    if (!mounted) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <button className="text-4xl w-12">
            {resolvedTheme === 'dark' && <FiSun onClick={() => setTheme('light')} />}
            {resolvedTheme === 'light' && <FiMoon onClick={() => setTheme('dark')} />}
        </button>
    )
}

export default ThemeSwitcher