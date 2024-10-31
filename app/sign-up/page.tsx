'use client'
import React, { useState } from 'react'
import SignIn from '@/components/sign-up/SignIn'
import SignUp from '@/components/sign-up/SignUp'

const SignUpPage = () => {

    const [registerToggle, setRegisterToggle] = useState(false)

    return (
        <div className="bg-slate-50 dark:bg-zinc-950 text-zinc-950 dark:text-gray-200">
            <div className="flex justify-center items-center flex-col">
                <div className="rounded-2xl bg-slate-200 dark:bg-zinc-800 shadow-lg text-gray-700 dark:text-gray-300">
                    <button
                        disabled={registerToggle}
                        onClick={() => setRegisterToggle(true)}
                        className="text-xl px-6 py-2 disabled:text-black disabled:dark:text-white rounded-l-2xl disabled:bg-purple-300  disabled:dark:bg-midpurple">
                        Register</button>
                    <button
                        disabled={!registerToggle}
                        onClick={() => setRegisterToggle(false)}
                        className="text-xl px-8 py-2 disabled:text-black disabled:dark:text-white  rounded-r-2xl disabled:bg-purple-300 disabled:dark:bg-midpurple ">
                        Sign In</button>
                </div>
                <div>
                    {registerToggle ? <SignUp /> : <SignIn />}
                </div>
            </div>
        </div>
    )
}

export default SignUpPage