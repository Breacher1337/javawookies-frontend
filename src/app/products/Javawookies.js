export default function Wookies() {
    return(
        <div className="bg-gray-100 p-4 rounded-lg text-center hover:bg-white transition-shadow
            hover:shadow-2xl hover:shadow-black text-gray-700">
                <div className="text-center">
                <img src="chocosarap.png" className="max-h-auto max-h-24 block mx-auto" alt="javawookies" />

                </div>
                <h4 className="text-xl font-semibold mt-0 text-black">Javawookies</h4>
                
                <button className="bg-amber-900 text-white rounded-full mt-4 px-4 py-2 ">Add to Cart ₱140</button>
            </div>
    );
}