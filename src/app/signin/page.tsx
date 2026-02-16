import SignInButton from '@/src/components/SignInButton'
import React from 'react'
import { signinAction } from './action'


function Page() {

    const authTypes = [
        { text: 'Continue With Google', src: 'https://authjs.dev/img/providers/google.svg', provider: 'google' },
        { text: 'Continue With Facebook', src: 'https://authjs.dev/img/providers/facebook.svg', provider: 'facebook' }

    ]

    return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white via-slate-50 to-slate-100 px-4">
            <div className="w-full max-w-md">
                <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg p-8">
                    <div className="flex flex-col items-center gap-4">
                        <img src="/logo.png" alt="Logo" className="w-20 h-20 object-contain" />
                        <h1 className="text-2xl font-semibold text-slate-900">Sign in to Your Account</h1>
                        <p className="text-sm text-slate-500 text-center">Choose one of the available providers below to continue. We only use your basic profile information to create an account.</p>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-slate-200" />
                            <span className="text-xs text-slate-400">Quick sign in</span>
                            <div className="flex-1 h-px bg-slate-200" />
                        </div>

                        <div className="mt-4 flex flex-col gap-3">
                            {authTypes.map((item, index) => (
                                <form key={index} action={signinAction} className="w-full flex p-2 rounded-lg justify-between shadow shadow-gray-500">
                                    <input type="hidden" name="provider" value={item.provider} />
                                    <SignInButton image={item.src} text={item.text} />
                                </form>
                            ))}
                        </div>
                    </div>

                </div>

             
            </div>
        </div>
    )
}

export default Page
