
import { SignUpAction } from '@/actions/auth';
import React from 'react'
import { useFormState } from 'react-dom'


const SignUp = () => {


    const [state, action] = useFormState(SignUpAction, undefined);

    return (
        <div className="bg-slate-200 dark:bg-zinc-800 border dark:border-2 border-slate-400 dark:border-black rounded-3xl mt-8 shadow-2xl">
            <form action={action} className="flex flex-col px-8 py-3 gap-4">
                <div className="flex flex-col md:flex-row">
                    <span className="flex-col pr-2">
                        <h3 className="text-left pb-1 pt-4 dark:text-lightpurple text-midpurple">Full Name</h3>
                        <input name="fullname" className="p-2 border border-zinc-950 dark:border-midpurple" type="text" placeholder="Full Name" />
                        {state?.errors?.fullname && <p className="text-red-500 max-w-48">{state.errors.fullname}</p>}
                    </span>
                    <span className="flex-col pl-2">
                        <h3 className="text-left pb-1 pt-4 dark:text-lightpurple text-midpurple">Email</h3>
                        <input name="email" className="p-2 border border-zinc-950 dark:border-midpurple" type="text" placeholder="Email" />
                        {state?.errors?.email && <p className="text-red-500 max-w-48">{state.errors.email}</p>}
                    </span>
                </div>
                <div className="flex flex-col md:flex-row">
                    <span className="flex-col pr-2 mt-4">
                        <h3 className="text-left pb-1 dark:text-lightpurple text-midpurple">Password</h3>
                        <input name="password" className="p-2 border border-zinc-950 dark:border-midpurple" type="password" placeholder="Password" />
                        {state?.errors?.password && (
                            <span className="text-red-500 max-w-fit relative">
                                {state.errors.password.map((error) => (
                                    <h3 className="max-w-48" key={error}>{error}</h3>
                                ))}
                            </span>)}
                    </span>
                    <span className="flex-col pl-2 mt-4">
                        <h3 className="text-left pb-1 dark:text-lightpurple text-midpurple">Repeat Password</h3>
                        <input name="repeatPassword" className="p-2 border border-zinc-950 dark:border-midpurple" type="password" placeholder="Repeat Password" />
                        {state?.errors?.repeatPassword && <p className="text-red-500 max-w-48">{state.errors.repeatPassword}</p>}
                    </span>
                </div>
                <button type="submit" className="p-2 bg-purple-300 dark:bg-midpurple rounded-full mt-8">Register</button>
            </form>
        </div>
    )
}

export default SignUp