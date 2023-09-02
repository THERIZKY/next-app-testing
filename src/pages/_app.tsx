import "@/styles/globals.css";
import AppShell from "@/Components/Layouts/AppShell";
import type { AppProps } from "next/app";
import Navbar from "@/Components/Layouts/Navbar";
import Footer from "@/Components/Layouts/Footer";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
