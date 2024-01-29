import Link from "next/link";
import Image from "next/image";
import Dreamimg from '@/assets/images/dream-image.png';
import ContentBox from "@/components/layout/ContentBox";
import PrimaryBtn from "@/components/layout/PrimaryBtn";



const DreamSection = () => {

	return (

		<>
			<div className="dream">
				<div className="dream_imgbox">
					<Image src={Dreamimg} alt="image" />
				</div>
				<div className="dream_detailbox">
					<div className="dream_text">
						<ContentBox locationtitle="Dream days in a special location" nametitle="Holiday on an organic farm" textwrap="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore." />
						<div className="dream_btn">
							<PrimaryBtn name="LEARN MORE" link="#" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DreamSection;