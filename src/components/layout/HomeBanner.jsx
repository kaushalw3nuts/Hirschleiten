import Link from "next/link";
import Image from "next/image";
import Logo from '@/assets/images/Hirschleiten-logo1.svg';
import Mail from '@/assets/images/banner-logo1.svg';
import Phone from '@/assets/images/banner-logo2.svg';
import Location from '@/assets/images/banner-logo3.svg';
import PrimaryBtn from "@/components/layout/PrimaryBtn";



const HomeBanner = () => {

	const bnrLoop = [
		{
			link: '#',
			imgsrc: Mail,
			imgalt: 'Mailimg',
		},
		{
			link: '#',
			imgsrc: Phone,
			imgalt: 'Phoneimg',
		},
		{
			link: '#',
			imgsrc: Location,
			imgalt: 'locationimg',
		},
	]

	return (
		<>
			<div className="banner_wrapper">
				<div className="bnr_wrap">
					<div className="imgbox">
						<div className="bnr_logo">
							<Link href="/"><Image src={Logo} alt="logo" /></Link>
						</div>
						<div className="bnr_center">
							<ul>
								{bnrLoop.map((social, index) => {
									const {link, imgsrc, imgalt} = social
									return (
										<li key={index}>
											<Link href={link}><Image src={imgsrc} alt={imgalt} /></Link>
										</li>
									)
								})}
							</ul>
						</div>
						<PrimaryBtn name="Book a summer vacation" link="#" />
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;