import Link from "next/link";
import Image from "next/image";
import LogoTwo from '@/assets/images/Hirschleiten-logo2.svg';
import Ftrlogo1 from '@/assets/images/footer-logo1.svg';
import Facebook from '@/assets/images/facebook.svg';
import Instagram from '@/assets/images/instagram.svg';
import Logopw from '@/assets/images/logo-pw-white.png';
import ftrimg1 from '@/assets/images/footer-image1.png';
import ftrimg2 from '@/assets/images/footer-image2.png';
import ftrimg3 from '@/assets/images/footer-image3.png';


const Footer = () => {

	const ftrBtnData = [
		{
			urlLink: "#",
			btnTitle: "imprint",
		},
		{
			urlLink: "#",
			btnTitle: "data protection",
		},
		{
			urlLink: "#",
			btnTitle: "AGB",
		},
	]

	const socialList = [
		{
			iconurl: "#",
			socialsrc: Facebook,
			socialalt: "image",
		},
		{
			iconurl: "#",
			socialsrc: Instagram,
			socialalt: "image",
		},
	]

	const tagList = [
		{
			tagurl: "#",
			tagTitle: "#hirschleiten",
		},
		{
			tagurl: "#",
			tagTitle: "#kleinarl",
		},
		{
			tagurl: "#",
			tagTitle: "#salzburgerland",
		},
	]

	const subFtrimg = [
		{
			subFtrsrc: ftrimg1,
			subFtralt: "image",
		},
		{
			subFtrsrc: ftrimg2,
			subFtralt: "image",
		},
		{
			subFtrsrc: ftrimg3,
			subFtralt: "image",
		},
	]

	return (

		<>
			<footer className="footer_main">
				<div className="container">
					<div className="ftrblock_wrap">
						<div className="firstblock">
							<Link href="#"><Image src={LogoTwo} alt="image" /></Link>
						</div>
						<div className="secondblock">
							<div className="addressblock">
								<p><strong>Schaidreiter family</strong>Adresse 123 <br />A-5603 Kleinarl</p>
							</div>
							<div className="loc-btn">
								<Link href="#"><Image src={Ftrlogo1} alt="image" />Routenplaner</Link>
							</div>
							<div className="ftr_btn">
								<ul>
									{ftrBtnData.map((btnList, index) => {
										const {urlLink, btnTitle} = btnList;
										return (
											<li key={index}>
												<Link href={urlLink}>{btnTitle}</Link>
											</li>
										)
									})}
								</ul>
							</div>
						</div>
						<div className="thirdblock">
							<p>T<Link href="tel:+43 664 123 45 67">+43 664 123 45 67</Link></p>
							<p>E<Link href="mailto:info@hirschleiten.at" className="footer-wrap">info@hirschleiten.at</Link></p>
						</div>
						<div className="fourthblock">
							<div className="followbox">
								<p>Follow us:</p>
							</div>
							<div className="social">
								{socialList.map((socialIconList, index) => {
									const {iconurl, socialsrc, socialalt} = socialIconList;
									return (
										<Link key={index} href={iconurl}>
											<Image src={socialsrc} alt={socialalt} />
										</Link>
									)
								})}
							</div>
							<div className="tagbox">
								<p>
									{tagList.map((tagListing, index) => {
										const {tagurl, tagTitle} = tagListing;
										return (
											<Link key={index} href={tagurl}>{tagTitle}</Link>
										)
									})}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="webite_by_block">
					<p>Website by: <i><Link href="#"><Image src={Logopw} alt="image" /></Link></i></p>
				</div>
				<div className="sub_footer">
					<div className="container">
						<div className="footer_section">
							{subFtrimg.map((ftrImages, index) => {
								const {subFtrsrc, subFtralt} = ftrImages;
								return (
									<div className="footer_img" key={index}>
										<Image src={subFtrsrc} alt={subFtralt} />
									</div>		
								)
							})}
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;