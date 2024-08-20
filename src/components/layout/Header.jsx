import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";




const Header = () => {

	const navLinks = [
		{ 
			hrefLink: "/",
			navTitle: "Home",
		},
		{
			hrefLink: "/about",
			navTitle: "About Us",
		},
		{
			hrefLink: "/blog",
			navTitle: "Blog",
		},
		{
			hrefLink: "/holiday",
			navTitle: "Holiday apartment",
		},
		{ 
			hrefLink: "/prices", 
			navTitle: "Prices",
		},
		{ 
			hrefLink: "/arrival",
			navTitle: "Arrival & location",
		},
		{
			hrefLink: "/contact", 
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
	const menuHandler = (e) => {
		e.preventDefault();
		
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
									const {hrefLink, navTitle} = navBar;
									const isActive = router.pathname === hrefLink;
									return (
										<li key={index} className={isActive ? 'active' : ''}>
											<Link href={hrefLink}>{navTitle}</Link>
										</li>
									)
								})}
							</ul>
						</div>
						<div className="menu-btn">
							<Link className={`toggle-btn ${menuBtn ? 'active' : ''}`} href="#" onClick={(e) => menuHandler(e)}>
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