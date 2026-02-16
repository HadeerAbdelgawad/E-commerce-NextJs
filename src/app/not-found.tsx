import React from 'react'
import { TbFaceIdError } from "react-icons/tb";


function NotFound() {

    return <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black/40 to-black/20">
            <div className="text-center">
                <TbFaceIdError className="mx-auto mb-4 text-6xl text-red-500" />
                <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
                <p className="text-lg font-medium text-gray-200">The page you are looking for does not exist.</p>
            </div>
        </div>
    </>
}

export default NotFound
