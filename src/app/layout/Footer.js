import Link from "next/link";
import CheckoutIcon from "../icons/Checkout";

export default function Footer() {
    return(
        <div className="fixed bottom-0 left-0 w-full">
        <footer className=" gap-3 text-xl mt-8 items-center justify-center mb-4 flex">
            <Link className="text-white  bg-red-700 rounded-full py-2
             px-6  flex gap-5 items-center text-center whitespace-nowrap
             hover:bg-primary transition-shadow hover:shadow-md hover:shadow-black" href="/hero" >
            Cancel 
            </Link>
        
            <Link className="text-black  bg-white rounded-full py-2
             px-6  flex gap-3 items-center text-center whitespace-nowrap border border-gray-950
             hover:bg-primary transition-shadow hover:shadow-md hover:shadow-black" href="/checkout" >
            Check Out <CheckoutIcon />
            </Link>
        </footer>
        </div>
    );
}