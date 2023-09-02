import Image from "next/image";
import { Inter } from "next/font/google";
import Snow from "@/Components/Elements/Snow";
import Swal from "sweetalert2";
import "animate.css";
const copyText = () => {
	const teksToCopy = "play.hariq.eu.org";

	const textarea = document.createElement("textarea");
	textarea.value = teksToCopy;

	document.body.appendChild(textarea);

	textarea.select();
	document.execCommand("copy");

	document.body.removeChild(textarea);

	Swal.fire({
		icon: "success",
		title: "Coppied IP to clipboard",
		text: "play.hariq.eu.org",
		showClass: {
			popup: "animate__animated animate__bounceInUp",
		},
		hideClass: {
			popup: "animate__animated animate__bounceOut animate__faster",
		},
	});
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="min-h-screen">
			<section>
				<div className="section-container relative overflow-hidden w-full h-screen">
					<Snow />
					<div className="content flex flex-col h-full justify-center items-center bg-transparan gap-5 z-20 ">
						<div className="header  animate__animated animate__backInDown animate__fast">
							<h1 className="text-5xl text- font-bold uppercase text-orange-500"></h1>
							<img
								src="/img/hariqmc.png"
								alt="biglogo"
								className="w-20rem md:w-35rem object-contain"
							/>
						</div>
						<div className="main text-white max-w-xxs md:max-w-2xl text-2xl animate__animated animate__bounceIn animate-delay-1s">
							<p>
								Come join us and embark on an adventure in the
								mysterious world within our Minecraft server.
								Join us now and invite your friends to join us
								too!
							</p>
						</div>
						<div className="footer flex justify-center w-44 h-12 ">
							<button
								onClick={() => {
									copyText();
								}}
								className="bg-sky-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-full h-full rounded-xl"
							>
								Play Now
							</button>
						</div>
					</div>
					<img
						src="/img/bg-3.jpg"
						className="image-cover w-screen h-full absolute -z-10 object-cover top-0 left-0"
						alt=""
					/>
				</div>
			</section>

			{/* Section kedua */}
			<section>
				<div className="section-container relative overflow-hidden w-full h-screen">
					<div className="content flex flex-col h-full  items-start bg-linear-gradient-About  gap-5 z-20 pt-32 pl-20">
						<div className="header  animate__animated animate__backInDown animate__fast">
							<h1 className="text-5xl text- font-bold uppercase text-orange-500">
								About
							</h1>
							<img
								src="/img/hariqabout.png"
								alt="biglogo"
								className="w-20rem object-contain"
							/>
						</div>
						<div className="main text-white max-w-xxs md:max-w-2xl text-2xl animate__animated animate__bounceIn animate-delay-1s">
							<p>
								HariqMC is a server established by Faiq & Fathar
								in 2022 and is an intermediate-level Minecraft
								server based in Indonesia. It is also the best
								Slimefun Survival Minecraft server in
								Indonesian!
							</p>
						</div>
					</div>
					<img
						src="/img/bg-4.png"
						className="image-cover w-screen h-full absolute -z-10 object-cover top-0 left-0"
						alt=""
					/>
				</div>
			</section>
		</div>
	);
}
