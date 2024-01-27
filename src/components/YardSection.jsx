import Link from "next/link";
import Image from "next/image";
import Dreamimg from '@/assets/images/dream-image.png';
import ContentBox from "@/components/layout/ContentBox";



const YardSection = () => {

	return (

		<>
			<div class="yard">
				<div class="farm_imgbox">
					<Image src={Dreamimg} alt="image" />
				</div>
				<div class="farm_detailbox">
					<div className="farm_text">
						<ContentBox locationtitle="Heading 3 (h3)" nametitle="Heading 4 (h4)" textwrap="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore." />
					</div>
				</div>
			</div>
		</>
	)
}

export default YardSection;