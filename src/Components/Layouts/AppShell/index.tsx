import Navbar from "../Navbar";
import Footer from "../Footer";
type AppShellProps = {
	children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
	return (
		<main className="flex flex-col justify-between min-h-screen">
			<div>
				<Navbar />
				{children}
			</div>
			<Footer />
		</main>
	);
};

export default AppShell;
