import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-slate-700 border-t-black h-96 flex justify-center items-center">
			<div className="footer-container w-9/12 min-h-3/4 items-center md:items-start text-slate-50 flex gap-5 flex-col md:flex-row justify-around">
				<div className="kiri flex flex-col gap-5">
					<div className="logo flex flex-col items-center md:items-start">
						<img
							src="/img/hariqabout.png"
							className="w-32 object-contain"
						/>
					</div>
					<div className="copyright">
						<p>Copyright © 2023 Hariq.</p>
						<p>All rights reserved</p>
					</div>
					<div className="link flex text-2xl gap-5">
						<Link
							href="https://discord.hariq.eu.org/"
							target="_blank"
						>
							<i className="fa-brands fa-discord" />
						</Link>
						<Link href="#" target="_blank">
							<i className="fa-brands fa-youtube" />
						</Link>
					</div>
				</div>
				<div className="tengah flex gap-10 text-left">
					<div className="tengah-kiri flex flex-col gap-5">
						<h3 className="font-bold">Usefull Links</h3>
						<ul className="flex flex-col gap-3">
							<li>
								<Link href="/store">Store</Link>
							</li>
							<li>
								<Link href="/perks">Perks</Link>
							</li>
							<li>
								<Link href="#">Contact Us</Link>
							</li>
						</ul>
					</div>
					<div className="tengah-kanan flex flex-col gap-5">
						<h3 className="font-bold">Support</h3>
						<ul>
							<li>
								<Link
									href="https://discord.hariq.eu.org/"
									target="_blank"
								>
									Help Center
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="kanan">
					<h1>© Website By Rizh</h1>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
