import Link from "next/link";
import Image from "next/image";
import Teaser1 from '@/assets/images/teaser-image1.png';
import Teaser2 from '@/assets/images/teaser-image2.png';
import Teaser3 from '@/assets/images/teaser-image3.png';
import Teasericon from '@/assets/images/teaser-icon.svg';
import PrimaryBtn from "@/components/layout/PrimaryBtn";



const TeaserSection = () => {

	const TeaserItems = [
		{ 
			srcItem: Teaser1,
			altItem: 'image',
			iconItem: Teasericon,
			textItem: 'Teaser',
		},
		{
			srcItem: Teaser2,
			altItem: 'image',
			iconItem: Teasericon,
			textItem: 'Teaser',
		},
		{
			srcItem: Teaser3,
			altItem: 'image',
			iconItem: Teasericon,
			textItem: 'Teaser',
		},
	];

	return (
		<>
			<div className="teaser">
				<div className="container">
					<div className="row">
						{TeaserItems.map((teaserData, index) => {
							const {srcItem, altItem, iconItem, textItem} = teaserData
							return (
								<div className="col-lg-4 col-md-6" key={index}>
									<div className="teaser_section">
										<div className="teaser_imgbox">
											<Image src={srcItem} alt={altItem} />
										</div>
										<div className="teaser_caption">
											<div className="image">
												<Image src={iconItem} alt={altItem} />
											</div>
											<div className="teaser_head">
												<h5>{textItem}</h5>
											</div>
										</div>
										<div className="teasure_btn">
											<PrimaryBtn name="button" link="#" />
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default TeaserSection;