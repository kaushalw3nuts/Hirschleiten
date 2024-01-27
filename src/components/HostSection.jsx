import Link from "next/link";
import Image from "next/image";
import Hostimg from '@/assets/images/host-image1.png';




const HostSection = () => {

	return (
		<>
			<div className="host">
				<div className="host_imagebox">
					<Image src={Hostimg} alt="image" />
				</div>
				<div className="host_text">
					<h3>Ihre Gastgeber <br /> Mit Herz: Familie Schaidreiter</h3>
				</div>
			</div>
		</>
	)
}

export default HostSection;