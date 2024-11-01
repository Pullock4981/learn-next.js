import NavbarItem from "./NavbarItem";


const Navbar = () => {
    return (
        <div className="flex bg-amber-100 justify-center gap-4 p-3 text-lg">
            <NavbarItem title="Trending" param="fetchTrending"></NavbarItem>
            <NavbarItem title="Top Rated" param="fetchTopRated"></NavbarItem>
        </div>
    );
};

export default Navbar;