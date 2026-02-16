import Image from 'next/image'
import React from 'react'

interface AuthButton {
    image: string | null | undefined,
    text: string
}

function SignInButton({ image, text }: AuthButton) {
    return (
        <>

            <button className='flex items-center gap-6'>
                {image && (
                    <Image
                        src={image}
                        alt={`${text} logo`}
                        width={24}
                        height={24}
                    />
                )}
                <span>{text}</span>
            </button>
        </>

    )
}

export default SignInButton
