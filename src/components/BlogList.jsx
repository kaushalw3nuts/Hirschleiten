

export const getStaticProps = async () => {
	const keyApi = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await keyApi.json();

	return {
		props: {
			data,
		},
	};
};


const BlogList = ({data}) => {

	// if (!data || !Array.isArray(data)) {
	// 	return <p className="no_data">No data available</p>;
	// }
	
	return (
		<>
			{data.map((el, index) => {
				const {id, title} = el;
				return (
					<div key={index}>
						<span>{id}</span>
						<h2>{title}</h2>
					</div>
				)
			})}
		</>
	)
}

export default BlogList;