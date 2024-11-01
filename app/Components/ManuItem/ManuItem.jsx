import Link from "next/link";


const ManuItem = ({title, address, Icon}) => {
    return (
        <Link href={address} className="hover:text-amber-500">
            <Icon className="text-2xl sm:hidden"></Icon>
            <p className="uppercase font-bold hidden sm:inline">{ title }</p>
        </Link>
    );
};

export default ManuItem;