import Link from "next/link";
import Image from "next/image";
import HolidayCaptionBox from "@/components/layout/HolidayCaptionBox";
import MainTitleBox from "@/components/layout/MainTitleBox";
import SubTitleBox from "@/components/layout/SubTitleBox";



const HeadlineSection = () => {

	return (
		<>
			<div class="headline">
				<div class="container">
					<div className="holiday_section">
						<h1><MainTitleBox main_title="Heading 1 (h1)" /></h1>
						<h2><SubTitleBox sub_title="Heading 2 (h2)" /></h2>
						<HolidayCaptionBox caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
					</div>
				</div>
			</div>
		</>
	)
}

export default HeadlineSection;