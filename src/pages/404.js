import Head from "next/head";
import Error from "@/components/layout/Error";


export default function Errorpage () {
	return (
		<>
			<Head>
				<title>404</title>
			</Head>
			<Error />
		</>
	)
}