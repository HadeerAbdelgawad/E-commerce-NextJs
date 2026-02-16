"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import userLogo from "@/public/user.png"


interface UserAvatarProps {
    src: string | null | undefined
    size?: number
}

function UserAvatar({ src, size = 40 }: UserAvatarProps) {
    const [imgSrc, setImgSrc] = useState(src || userLogo)


    return (
        <>
            <Image
                src={imgSrc}
                alt="User Avatar"
                fill
                sizes="40px"
                className="rounded-full object-cover"
                onError={(e) => {
                    e.currentTarget.src = userLogo.src;
                }}
            />
        </>
    )
}

export default UserAvatar
