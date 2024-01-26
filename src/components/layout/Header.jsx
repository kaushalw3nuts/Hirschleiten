import Link from "next/link";
import { useState } from "react";





const Header = () => {
	
	return (
		<>
			<header className="main_header">
				<div className="header_wrap">
					<div className="ferien-header-block">
						<div className="ferien-header-nav">
							<ul>
								<li><Link href="#" className="active">Home</Link></li>
								<li><Link href="#">About Us</Link></li>
								<li><Link href="#">Holiday apartment</Link></li>
								<li><Link href="#">Prices</Link></li>
								<li><Link href="#">Arrival & location</Link></li>
								<li><Link href="#">Contact</Link></li>
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