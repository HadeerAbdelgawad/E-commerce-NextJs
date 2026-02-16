import Image from "next/image";
import Link from "next/link";
import wallpaperImage from '../../public/wallpaper.jpg';
import { title } from "process";

export const metadata={
  title: "Home"
}
export default function Home() {

  return (
     <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 m-0">
        <Image
          src={wallpaperImage}
          alt="wallpaper"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-semibold text-gray-50 mb-10 tracking-tight">
          Welcome to Our Market Place
        </h1>
        <p className="text-2xl text-gray-300 mb-8 max-w-2xl">
          Discover a world of products at your fingertips. Shop now and experience the best deals!
        </p>
        <Link 
          href="/products" 
          className="px-6 py-3 bg-gray-800 text-white rounded-2xl text-lg font-medium hover:bg-gray-600 transition-colors duration-200"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
