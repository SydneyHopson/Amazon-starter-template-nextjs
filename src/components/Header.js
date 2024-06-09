import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header>
            <div className="flex items-center bg-black p-1 flex-grow py-2">
                <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
                    <Image 
                        src="/Connectslogo.png" // Correct path to the image in the public folder
                        width={50}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                        alt="ConnectsLogo"
                    />
                </div>

                <div className="hidden sm:flex  items-center h-10 rounded-md flex-grow cursor-pointer  bg-red-600 hover:bg-red-500  ">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 " type="text" />
                    <SearchIcon className='h-12 p-4'    />

                </div>
                <div>
                {/* Right Side */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap" >
                    <div className="Link">
                    <p className="font-extrabold md:text-sm"> Hello</p>
                    <p className="font-extrabold md:text-sm"> Account & Lists</p>
                    </div>
                    <div className="link">
                    <p className="font-extrabold md:text-sm">Returns</p>
                    <p className="font-extrabold md:text-sm">&Orders</p>
                    </div>
                    <div className="relative link flex item-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-red-600 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline mt-2 font-extrabold md:text-sm ">Basket</p>
                    </div>
            </div>
        </div>
    </div>
     {/* Bottom Nav */}
     <div className="flex item-center space-x-3 p-2 pl-6 bg-amazon_blue text-white text-sm" >
                        <p className="link flex item-center "> 
                            <MenuIcon className="h-6 mr-1 " />
                            All </p>
                            <p className="link ">Connects Drivers</p>
                            <p className="link ">Connects Business</p>
                            <p className="link "> Today'sDeals</p>
                            <p className="link hidden lg:inline-flex  "> PopUp Shop</p>
                            <p className="link hidden lg:inline-flex  ">Certified Apparel</p>
                            <p className="link hidden lg:inline-flex  "> WhiteLabel</p>
                            <p className="link hidden lg:inline-flex  "> Extras </p>
                    </div>
        </header>
    );
}

export default Header;
