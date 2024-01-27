import Link from "next/link";
import Image from "next/image";





const HolidayTitleBox = (props) => {

	return (

		<>
			<div class="holiday_section">
				<h1>{props.main_title}</h1>
				<h2>{props.sub_title}</h2>
				<p>{props.caption}</p>
			</div>
		</>
	)
}

export default HolidayTitleBox;