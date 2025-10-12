import Link from "next/link";
import Cart from "../icons/Cart";
/*import Cart from "../icons/Cart"; */


export default function Header() {
    return(
        
        <header className="fixed top-0 left-0 w-full bg-white flex items-center justify-between
                 py-2 px-12 shadow-md z-50">
     
      <nav className=" flex gap-5 text-gray-950 text font-semibold items-center" >
         <a href="" className="text-2xl text-amber-800 font-bold text-primary ">
        JAVAWOOKIES
      </a>
          
          
          
      </nav>
      <nav className="flex gap-5 text-gray-950 text font-semibold items-center">
        <Link className="py-2 flex gap-3 rounded-full px-3 item-center border border-gray-950 transition-shadow
            hover:shadow-md hover:shadow-gray-950"href="/cart"> <Cart /> </Link>
            
          </nav>
   </header>
  
    );
}
