import Link from "next/link";
import Image from "next/image";
import HolidayTitleBox from "@/components/layout/HolidayTitleBox";





const HeadlineSection = () => {

	return (
		<>
			<div class="headline">
				<div class="container">
					<HolidayTitleBox main_title="Heading 1 (h1)" sub_title="Heading 2 (h2)" caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
				</div>
			</div>
		</>
	)
}

export default HeadlineSection;