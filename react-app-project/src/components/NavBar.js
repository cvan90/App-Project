import {Link} from "react-router-dom";
function NavBar(){
    return (
        <>
        <nav>
            <link to="/">Home</link>{" | "}
            <link to="/about">About</link>
        </nav>
        </>
    );
}
export default NavBar;