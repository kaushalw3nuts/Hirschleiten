import Link from "next/link";




const ContentBox = (props) => {

	return (

		<>
			<h3>{props.locationtitle}</h3>
			<h4>{props.nametitle}</h4>
			<p>{props.textwrap}</p>
		</>
	)
}

export default ContentBox;