'use client'
import { useRouter } from "next/navigation";
export default function NavBtns(){
    const router = useRouter();
    return(
        <>
            <nav className="flex flex-row min-w-full justify-center  p-2">
            <div className="flex flex-row gap-5">
            <button className="bg-white text-black p-4 hover:bg-wheat" onClick={()=>{
            router.push('/');
            }} >Single QR Code Generator</button>
            <button className="bg-white text-black p-4" onClick={()=>{
            router.push('/multi');
            }} >Multi QR Code Generator</button>
            </div>
            </nav>
        </>
    )
}
