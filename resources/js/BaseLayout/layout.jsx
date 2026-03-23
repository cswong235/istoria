import {Link} from '@inertiajs/react'

export default function Layout({ children }) {
    return (
        <div>
            {/* Mobile Navigation */}
            <div className="block md:hidden">
                <div className="bg-taupe-800/80 m-2 rounded-xl">
                    <nav className="flex justify-between navbar">
                        <img src="/media/istoria_logo.png" alt="Istoria logo" className="h-12 ml-2 flex items-center"/>
                        <ul className="flex gap-4 justify-end align-center menu menu-horizontal">
                            <li className="font-lil-regular transition-colors hover:text-taupe-900"><Link href="/">Home</Link></li>
                            <li className="font-lil-regular transition-colors hover:text-taupe-900"><Link href="/about">About</Link></li>
                            <li className="font-lil-regular transition-colors hover:text-taupe-900"><Link href="/collection">Collection</Link></li>
                        </ul>
                    </nav>
                </div>
                MOBILE VIEW
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:grid grid-cols-2">
                <div className="bg-taupe-700/90 m-2 rounded-xl z-1 w-full py-2">
                    <nav className="flex justify-between">
                        <Link href="/">
                            <img src="/media/istoria_logo.png" alt="Istoria logo" className="h-12 ml-2 flex items-center align-center"/>
                        </Link>
                        <ul className="flex gap-4 justify-end align-center menu menu-horizontal">
                            <li className="font-lil-regular transition-colors hover:text-taupe-900"><Link href="/">Home</Link></li>
                            <li className="font-lil-regular transition-colors hover:text-taupe-900"><Link href="/about">About</Link></li>
                            <li className="font-lil-regular transition-colors hover:text-taupe-900"><Link href="/collection">Collection</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="dropdown dropdown-end flex justify-end m-2">
                    <div tabIndex={0} className="btn btn-ghost btn-circle rounded-full avatar">
                        <div className="w-10 rounded-full">
                            <img src="/media/istoria_standalone.png" alt="Istoria logo" />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}