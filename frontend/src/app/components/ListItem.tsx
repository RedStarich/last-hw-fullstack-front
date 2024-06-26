"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
    image : string;
    title : string;
    href : string;
}

const ListItem: React.FC<ListItemProps> = ({image, title, href}) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href);
    }
  return (
    <button onClick={onClick} className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
        <div className="relative min-h-[64px] min-w-[64px]">
            <Image src={image} alt={title} className="object-cover" fill/>
        </div>
            <p className="font-medium truncate py-5">{title}</p>
            <div className="absolute opacity-0 transition rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
                <FaPlay className="text-neutral-400 group-hover:text-black transition"/>
            </div>
    </button>
  )
}

export default ListItem