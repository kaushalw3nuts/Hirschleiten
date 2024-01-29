import Link from "next/link";
import Image from "next/image";
import Dayimg1 from '@/assets/images/days-image1.png';
import Dayimg2 from '@/assets/images/days-image2.png';
import Dayimg3 from '@/assets/images/days-image3.png';




const DaySection = () => {

	return (

		<>
			<div className="days">
				<div className="container">
					<div className="days_section">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="days_img">
									<Image src={Dayimg1} alt="image" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="days_img">
									<Image src={Dayimg2} alt="image" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="days_img">
									<Image src={Dayimg3} alt="image" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="days_img">
									<Image src={Dayimg1} alt="image" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="days_img">
									<Image src={Dayimg2} alt="image" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="days_img">
									<Image src={Dayimg3} alt="image" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DaySection;