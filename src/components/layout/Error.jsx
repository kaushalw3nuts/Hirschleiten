import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {

	const routing = useRouter();
	useEffect(() => {
		setTimeout(() => {
			routing.push("/");
		}, 3000);
	}, []);
	
	return (
		<>
			<div className="section">
				<h1 className="error">
					404
				</h1>
				<span>PAGE NOT FOUND</span>
				<div className="page">
					We can't find the page you're looking for. If the problem persists please contact us.
				</div>
				<div className="back_btn">
					<Link className="back-home" href="/">Back to home</Link>
				</div>
			</div>
		</>
	)
}

export default Error;