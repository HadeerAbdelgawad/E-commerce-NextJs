"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({ href, name }: { href: string, name: string }) {

    const pathname= usePathname()

    
    
    return (
        <>
            
                <Link
                    key={name}
                    href={href}
                    className={pathname===href?`block px-3 py-1 rounded-md text-gray-900 text-lg font-bold hover:text-white hover:bg-white/5 text-md transition`:'block px-3 py-1 rounded-md text-gray-200 hover:text-white hover:bg-white/5 text-md transition'}
                >
                    {name}
                </Link>
            
        </>
    )
}

export default NavLink
