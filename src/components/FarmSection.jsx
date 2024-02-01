import Link from "next/link";
import Image from "next/image";
import Dreamimg from '@/assets/images/dream-image.png';
import LocationTitleBox from "@/components/layout/LocationTitleBox";
import NameTitleBox from "@/components/layout/NameTitleBox";
import HolidayCaptionBox from "@/components/layout/HolidayCaptionBox";



const FarmSection = () => {

	return (

		<>
			<div className="farm">
				<div className="farm_imgbox">
					<Image src={Dreamimg} alt="image" />
				</div>
				<div className="farm_detailbox">
					<div className="farm_text">
						<h3><LocationTitleBox locationtitle="Dream days in a special location" /></h3>
						<h4><NameTitleBox nametitle="Holiday on an organic farm" /></h4>
						<HolidayCaptionBox caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore." />
					</div>
				</div>
			</div>
		</>
	)
}

export default FarmSection;