import Link from "next/link";
export default function LearnPage() {
    return(<section className="text-center my-16"> 
        <h1 className="text-4xl font-bold mb-4 text-black">About Us</h1>
      <div className="text-gray-500">
        <p className="max-w-2xl mx-auto text-gray-600">We are a bakery that specializes in making delicious pastries and cookies. Our mission is to provide our customers
         with the best quality baked goods and exceptional customer service. 
         We believe that everyone deserves a little sweetness in their life, 
         and we strive to make that happen with every pastry and cookie we bake.
         <br/><br/>
         <div>

            This is a demo webapp made by a student as part of their requirements for their DSA subject.
            Members: Elaijah Sapla, James Berto, Chester Lauzon, Lyle Rivera
         </div>
         
         </p>
      </div>
      <footer className="border-t text-center text-gray-500 py-6 my-6">
          &copy; 2025 JavaWookies. All rights reserved.
         </footer>
         <>
      <Link className="text-white  bg-red-700 rounded-full py-2
                   px-6   
                   hover:bg-primary transition-shadow hover:shadow-md hover:shadow-black" href="/hero" >
                  Back 
                  </Link></>
      </section>
    );
}