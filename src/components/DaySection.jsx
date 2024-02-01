import Link from "next/link";
import Image from "next/image";
import Dayimg1 from '@/assets/images/days-image1.png';
import Dayimg2 from '@/assets/images/days-image2.png';
import Dayimg3 from '@/assets/images/days-image3.png';




const DaySection = () => {

	const dayList = [
		{ 
			dayImgsrc: Dayimg1,
			dayImgalt: 'image',
		},
		{
			dayImgsrc: Dayimg2,
			dayImgalt: 'image',
		},
		{
			dayImgsrc: Dayimg3,
			dayImgalt: 'image',
		},
		{ 
			dayImgsrc: Dayimg1,
			dayImgalt: 'image',
		},
		{ 
			dayImgsrc: Dayimg2,
			dayImgalt: 'image',
		},
		{
			dayImgsrc: Dayimg3,
			dayImgalt: 'image',
		},
	];
	return (

		<>
			<div className="days">
				<div className="container">
					<div className="days_section">
						<div className="row">
							{dayList.map((dayWrap, index) => {
								const {dayImgsrc, dayImgalt} = dayWrap;
								return (
									<div className="col-lg-4 col-md-6" key={index}>
										<div className="days_img">
											<Image src={dayImgsrc} alt={dayImgalt} />
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DaySection;