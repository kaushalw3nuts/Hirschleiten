import Head from "next/head";
import BlogList from "@/components/BlogList";

export const getStaticProps = async () => {
	const keyApi = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await keyApi.json();

	return {
		props: {
			data,
		},
	};
};

export default function Blog (props) {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<BlogList data={props.data} />
		</>
	)
}