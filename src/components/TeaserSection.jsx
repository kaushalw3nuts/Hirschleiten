import Link from "next/link";
import Image from "next/image";
import Teaser1 from '@/assets/images/teaser-image1.png';
import Teaser2 from '@/assets/images/teaser-image2.png';
import Teaser3 from '@/assets/images/teaser-image3.png';
import Teasericon from '@/assets/images/teaser-icon.svg';
import PrimaryBtn from "@/components/layout/PrimaryBtn";



const TeaserSection = () => {

	return (

		<>
			<div className="teaser">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="teaser_section">
								<div className="teaser_imgbox">
									<Image src={Teaser1} alt="image" />
								</div>
								<div className="teaser_caption">
									<div className="image">
										<Image src={Teasericon} alt="image" />
									</div>
									<div className="teaser_head">
										<h5>Teaser</h5>
									</div>
								</div>
								<div className="teasure_btn">
									<PrimaryBtn name="button" link="#" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="teaser_section">
								<div className="teaser_imgbox">
									<Image src={Teaser2} alt="image" />
								</div>
								<div className="teaser_caption">
									<div className="image">
										<Image src={Teasericon} alt="image" />
									</div>
									<div className="teaser_head">
										<h5>Teaser</h5>
									</div>
								</div>
								<div className="teasure_btn">
									<PrimaryBtn name="button" link="#" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="teaser_section">
								<div className="teaser_imgbox">
									<Image src={Teaser3} alt="image" />
								</div>
								<div className="teaser_caption">
									<div className="image">
										<Image src={Teasericon} alt="image" />
									</div>
									<div className="teaser_head">
										<h5>Teaser</h5>
									</div>
								</div>
								<div className="teasure_btn">
									<PrimaryBtn name="button" link="#" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default TeaserSection;