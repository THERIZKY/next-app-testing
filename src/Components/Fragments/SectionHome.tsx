/* eslint-disable @next/next/no-img-element */
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

type SectionProps = {
	children: React.ReactNode;
	itemsPosition: string;
	cover: string;
	snowActive: boolean;
	isTransparan: boolean;
};

const SectionHome = ({
	children,
	cover,
	itemsPosition,
	snowActive,
	isTransparan,
}: SectionProps) => {
	return (
		<section>
			<div className="section-container relative overflow-hidden w-full h-screen">
				{snowActive && <Snow />}
				<div
					className={`content flex flex-col h-full ${itemsPosition} gap-5 z-20 ${
						isTransparan
							? "bg-transparan"
							: "bg-linear_gradient_About"
					}`}
				>
					{children}
				</div>
				<img
					src={cover}
					className="image-cover w-screen h-full absolute -z-10 object-cover top-0 left-0"
					alt=""
				/>
			</div>
		</section>
	);
};

const header = ({
	gambar,
	kelas,
	text,
}: {
	gambar: string;
	kelas: string;
	text: string;
}) => {
	return (
		<div className="header  animate__animated animate__backInDown animate__fast">
			<h1 className="text-5xl text- font-bold uppercase text-orange-500">
				{text}
			</h1>
			<img src={gambar} alt="biglogo" className={kelas} />
		</div>
	);
};

const main = (props: { children: React.ReactNode; dataAOS: string }) => {
	const { children, dataAOS } = props;
	return (
		<div
			data-aos="fade-up"
			className="main text-white max-w-xxs md:max-w-2xl text-2xl animate__animated animate__bounceIn animate-delay-1s"
		>
			<p>{children}</p>
		</div>
	);
};

const footer = () => {
	return (
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
	);
};

SectionHome.header = header;
SectionHome.main = main;
SectionHome.footer = footer;
export default SectionHome;
