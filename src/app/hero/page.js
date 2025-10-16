"use client";
import Image from "next/image";
import Right from "@/icons/Right";
import Link from "next/link";


export default function Hero() {
    return(
       <section className="hero justify-center items-center gap-12 block mt-20">
         <div className=" flex justify-center items-center w-full h-140 relative">
        <Image src={'/mainpagefood.jpg'} layout={'fill'} 
        objectFit={'contain'} alt={'yum'}
        />
     </div>
        <div className="py-12 items-center text-center">
      <h1 className="text-4xl font-semibold text-black">FRESHLY <span className="text-amber-900">BAKED</span>, <br/> LOVE IN EVERY <span className="text-amber-900">BITE</span>.</h1>
      <p className="mt-4 text-black">Everything you wish, We can provide</p>
      <div className="flex gap-4 text-sm mt-8 items-center justify-center">
           
            <Link className="text-white  bg-amber-900 rounded-full py-2
             px-6 min-w-[170px] flex gap-5 items-center whitespace-nowrap
             hover:bg-primary transition-shadow hover:shadow-md hover:shadow-black" href="/homemenu" >
            Order Now <Right />
            </Link>
        
            <Link className="py-2 px-6 min-w-[170px] flex gap-5 items-center 
            whitespace-nowrap border rounded-full border-gray-950
            hover:bg-white transition-shadow
            hover:shadow-md hover:shadow-gray-950 text-black" href="/learn" >
            Learn More <Right /> 
            </Link> 
    </div>
</div>
       
      <div className="absolute -right-12 w-full">
        <Image src={'/chocosarap.png'} layout={'fill'} 
        objectFit={'contain'} alt={'chocosarap'}
        />
     </div>
    </section>
    );
}