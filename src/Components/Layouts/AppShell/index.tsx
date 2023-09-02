import Navbar from "@/Components/Layouts/Navbar";
import Footer from "@/Components/Layouts/Footer";

type AppShellProps = {
	children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
	return (
		<>
			<div>
				<Navbar />
				{children}
			</div>
			<Footer />
		</>
	);
};

export default AppShell;
