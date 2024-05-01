import { PiTelevisionSimpleLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { BiCategory, BiCameraMovie, BiTennisBall } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const navlist = [
    {
        name: 'Search',
        icon: <HiMiniMagnifyingGlass />,
        value: '/explore'
    },
    {
        name: 'Home',
        icon: <GoHome />,
        value: '/home'
    },
    {
        name: 'TV',
        icon: <PiTelevisionSimpleLight />,
        value: '/shows'
    },
    {
        name: 'Movies',
        icon: <BiCameraMovie />,
        value: '/movies'
    },
    {
        name: 'Sports',
        icon: <BiTennisBall />,
        value: '/sports'
    },
    {
        name: 'Categories',
        icon: <BiCategory />,
        value: '/categories'
    },
]