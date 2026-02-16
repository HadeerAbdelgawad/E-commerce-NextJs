import React from 'react'

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black/40 to-black/20">
            <div className="flex flex-col items-center gap-6">
                <div className="w-28 h-28 relative">
                    {/* Fancy SVG spinner with two animated rings and a pulsing center dot */}
                    <svg viewBox="0 0 50 50" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#FFFFFF" />
                                <stop offset="50%" stopColor="#9CA3AF" />
                                <stop offset="100%" stopColor="#0F172A" />
                            </linearGradient>
                            <linearGradient id="g2" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#E5E7EB" />
                                <stop offset="100%" stopColor="#6B7280" />
                            </linearGradient>
                        </defs>

                        <g className="outer" style={{ transformOrigin: '25px 25px' }}>
                            <circle cx="25" cy="25" r="20" fill="none" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.95" />
                        </g>

                        <g className="inner" style={{ transformOrigin: '25px 25px' }}>
                            <circle cx="25" cy="25" r="14" fill="none" stroke="url(#g2)" strokeWidth="3" strokeLinecap="round" strokeDasharray="88" strokeDashoffset="66" strokeOpacity="0.95" />
                        </g>

                        <circle cx="25" cy="25" r="5" fill="#fff" className="center-dot" />
                    </svg>

                    <style>{`
                        .outer { animation: spin 2.8s linear infinite; }
                        .inner { animation: spin-rev 1.4s linear infinite; }
                        .center-dot { animation: pulse 1.2s ease-in-out infinite; fill: #fff; }

                        @keyframes spin { to { transform: rotate(360deg); } }
                        @keyframes spin-rev { to { transform: rotate(-360deg); } }
                        @keyframes pulse {
                            0% { transform: scale(1); opacity: 1; }
                            50% { transform: scale(0.85); opacity: 0.7; }
                            100% { transform: scale(1); opacity: 1; }
                        }
                    `}</style>
                </div>

                <div className="text-center">
                    <h2 className="text-lg font-semibold text-white">Loading Our Market…</h2>
                    <p className="text-sm text-gray-300">Preparing the best deals for you</p>
                </div>
            </div>
        </div>
    )
}
