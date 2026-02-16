import { auth } from '@/lib/auth';
import Link from 'next/link';
import React from 'react'
import UserAvatar from '../../components/UserAvatar'
import { FiEdit } from "react-icons/fi";

type SessionUser = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
};

async function Page() {
    const session = await auth();
    console.log(session);


    if (!session?.user) {
        return (
            <div className='min-h-[200px] flex flex-col justify-center items-center text-red-700 font-semibold text-2xl'>
                Please, Sign in first
                <Link
                    href="/signin"
                    className='underline mt-2 text-green-500 hover:text-green-600 transition'
                >
                    Go to Sign In
                </Link>
            </div>
        );
    }

    const user = session.user as SessionUser;

    return (
        <>
            <div className="mt-25 min-h-[60vh] flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-lg rounded-2xl shadow-lg " style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8))' }}>
                    <div className="flex items-center gap-4 p-6 border-b border-teal-100">
                        <div className="relative w-20 h-20 rounded-full p-1" style={{ background: 'linear-gradient(135deg,#064e3b,#059669)' }}>
                            <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center">
                                <UserAvatar src={user?.image} />
                            </div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-teal-900">{user?.name || 'Unknown User'}</h2>
                            <p className="text-sm text-teal-700 mt-1">{user?.email}</p>
                            <p className="text-xs text-gray-500 mt-2">Session expires: <span className="font-medium text-gray-700">{session.expires}</span></p>
                        </div>

                    </div>

                    <div className="p-6">
                        <h3 className="text-sm text-gray-500 mb-2">Details</h3>
                        <div className="space-y-3">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Full name</span>
                                <div className="rounded-lg p-3 bg-gray-100">{user?.name}</div>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Email</span>
                                <div className="rounded-lg p-3 bg-gray-100">{user?.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;
