import { SignInAction } from '@/actions/auth'
import React from 'react'
import { useFormState } from 'react-dom'

const SignIn = () => {


    const [state, action] = useFormState(SignInAction, undefined)

    return (
        <div className="bg-slate-200 dark:bg-zinc-800 border dark:border-2 border-slate-400 dark:border-black rounded-3xl mt-8 shadow-2xl">
            <form action={action} className="flex flex-col px-8 py-3">
                <h3 className="text-left pb-1 pt-4 dark:text-lightpurple text-midpurple">Email</h3>
                <input name="email" className="p-2 border border-zinc-950 dark:border-midpurple" type="text" placeholder="Email" />
                {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
                <h3 className="text-left pb-1 mt-4 dark:text-lightpurple text-midpurple">Password</h3>
                <input name="password" className="p-2 border border-zinc-950 dark:border-midpurple" type="password" placeholder="Password" />
                {state?.errors?.password && <p className="text-red-500">{state.errors.password}</p>}
                <button type="submit" className="p-2 bg-purple-300 dark:bg-midpurple rounded-full mt-8">Sign in</button>
            </form>
        </div>
    )
}

export default SignIn