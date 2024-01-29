import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";




const Header = () => {

	const navLinks = [
		{ 
			href: "/",
			navTitle: "Home",
		},
		{
			href: "/about",
			navTitle: "About Us",
		},
		{
			href: "/holiday",
			navTitle: "Holiday apartment",
		},
		{ 
			href: "/prices", 
			navTitle: "Prices",
		},
		{ 
			href: "/arrival",
			navTitle: "Arrival & location",
		},
		{
			href: "/contact", 
			navTitle: "Contact",
		},
	];

	const [onScroll, setScroll] = useState(false);
	useEffect(() => {
		const scrollHandler = () => {
			setScroll(window.scrollY > 1);
		}
		window.addEventListener('scroll', scrollHandler);
	}, []);

	const [menuBtn, setMenuBtn] = useState(false);
	const menuHandler = () => {
		setMenuBtn(!menuBtn);
		const bodyElement = document.body;
		bodyElement.classList.toggle('open_nav');
	}

	const router = useRouter();
	
	return (
		<>
			<header className={`main_header ${onScroll ? 'fixed' : ''}`}>
				<div className="header_wrap">
					<div className="ferien-header-block">
						<div className={`ferien-header-nav ${menuBtn ? 'slide' : ''}`}>
							<ul>
								{navLinks.map((navBar, index) => {
									const {href, navTitle} = navBar;
									const isActive = router.pathname === href;
									return (
										<li key={index} className={isActive ? 'active' : ''}>
											<Link href={href}>{navTitle}</Link>
										</li>
									)
								})}
							</ul>
						</div>
						<div className="menu-btn">
							<Link className={`toggle-btn ${menuBtn ? 'active' : ''}`} href="javascript:void(0);" onClick={menuHandler}>
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