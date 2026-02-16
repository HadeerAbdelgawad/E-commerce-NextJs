"use client"
import React from 'react'
 interface ErrorProps{
        error: Error;
    }
function Error({error}:ErrorProps) {


    return <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black/40 to-black/20">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">{error.message}</h1>
                <p className="text-lg text-gray-300">An unexpected error has occurred. Please try again later.</p>
            </div>
        </div>
    </>
}

export default Error
