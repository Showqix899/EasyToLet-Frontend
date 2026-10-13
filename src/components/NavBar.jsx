import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="max-lg:collapse  shadow-sm w-full rounded-md backdrop-blur-sm">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <button className="btn btn-ghost text-xl">EasyToLet</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><button><Link to="/register">Registration</Link></button></li>
                        <li><button><Link to="/login">Login</Link></button></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">
                                    <li><button>Submenu 1</button></li>
                                    <li><button>Submenu 2</button></li>
                                </ul>
                            </details>
                        </li>
                        <li><button>Item 3</button></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <input type="text" placeholder="Search" className="input w-64 lg:w-auto" />
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                    <li><button>Item 1</button></li>
                    <li>
                        <button>Parent</button>
                        <ul>
                            <li><button>Submenu 1</button></li>
                            <li><button>Submenu 2</button></li>
                        </ul>
                    </li>
                    <li><button>Item 3</button></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar