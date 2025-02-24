import Image from "next/image";
import logo from "../../public/logo.png";

export default function extensionActions() {
    return (
        <div>
            <button class="relative duration-200 w-[60px] h-[60px] flex items-center justify-center opacity-75 hover:opacity-100 cursor-pointer ease-in-out">
                <div class="h-12 relative w-12 bg-black/60 hover:duration-200 rounded-full flex items-center justify-center border-2 border-white/20">
                    <Image src={logo} alt="V" class="h-8 w-8 absolute inset-0 m-auto z-10" />
                </div>
            </button>
        </div>
    );
}