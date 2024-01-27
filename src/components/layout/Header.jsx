import Link from "next/link";
import { useState, useEffect } from "react";





const Header = () => {
	
	const [onScroll, setScroll] = useState(false);
	useEffect(() => {
		const scrollHandler = () => {
			setScroll(window.scrollY > 1);
		}
		window.addEventListener('scroll', scrollHandler);
	}, []);
	return (
		<>
			<header className={`main_header ${onScroll ? 'fixed' : ''}`}>
				<div className="header_wrap">
					<div className="ferien-header-block">
						<div className="ferien-header-nav">
							<ul>
								<li><Link href="/" className="active">Home</Link></li>
								<li><Link href="/about">About Us</Link></li>
								<li><Link href="/holiday">Holiday apartment</Link></li>
								<li><Link href="/prices">Prices</Link></li>
								<li><Link href="/arrival">Arrival & location</Link></li>
								<li><Link href="/contact">Contact</Link></li>
							</ul>
						</div>
						<div className="menu-btn">
							<Link className="toggle-btn" href="#">
								<span></span>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;