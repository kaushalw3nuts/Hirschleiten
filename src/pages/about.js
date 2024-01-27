import Head from "next/head";
import HomeBanner from "@/components/layout/HomeBanner";
import HeadlineSection from "@/components/HeadlineSection";
import FarmSection from "@/components/FarmSection";
import YardSection from "@/components/YardSection";
import DaySection from "@/components/DaySection";



export default function About () {

	return (
		<>
			<Head>
				<title>Aboutpage</title>
			</Head>
			<HomeBanner />
			<HeadlineSection />
			<FarmSection />
			<YardSection />
			<DaySection />
		</>
	)
}