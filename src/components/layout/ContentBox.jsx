import Link from "next/link";
import PrimaryBtn from "@/components/layout/PrimaryBtn";




const ContentBox = (props) => {

	return (

		<>
			<div className="dream_text">
				<h3>{props.locationtitle}</h3>
				<h4>{props.nametitle}</h4>
				<p>{props.textwrap}</p>
				<div className="dream_btn">
					<PrimaryBtn name="LEARN MORE" link="#" />
				</div>
			</div>
		</>
	)
}

export default ContentBox;