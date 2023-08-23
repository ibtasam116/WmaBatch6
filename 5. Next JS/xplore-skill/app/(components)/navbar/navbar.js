import Link from 'next/link'
import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <section className="Sub-header">
                <nav>
                    <Link href="index.html" className="logo">Xplore
                        <i className="fab fa-staylinked"></i>kill
                    </Link>
                    <div className="nav-links" id="navLinks">
                        <i className="fa fa-times" onclick="hideMenu()"></i>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/courses">Course</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <i className="fa fa-bars" onclick="showMenu()"></i>
                </nav>
                <h1>{props.header_title}</h1>
            </section>
        </>

    )
}
