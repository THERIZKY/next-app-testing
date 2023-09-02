import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
type Data = {
	name: string;
};
const Card = ({
	title,
	price,
	includedFeatures,
}: {
	title: string;
	price: number;
	includedFeatures: string[];
}) => {
	const router = useRouter();

	// const buyHandler = () => {
	// 	router.push({ pathname: "/checkout", query: { title, price } });
	// };

	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8 animate__animated animate__fadeInDown">
			<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-slate-400">
				<div className="p-8 sm:p-10 lg:flex-auto">
					<h3 className="text-6xl text-center font-bold tracking-tight text-gray-900">
						{title}
					</h3>
					<div className="mt-10 flex items-center gap-x-4">
						<h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
							What’s included
						</h4>
						<div className="h-px flex-auto bg-gray-100" />
					</div>
					<ul
						role="list"
						className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
					>
						{includedFeatures.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>
				</div>
				<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
					<div className="rounded-2xl bg-slate-200 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
						<div className="mx-auto max-w-xs px-8">
							<p className="text-base font-semibold text-gray-600">
								Pay once, own it forever
							</p>
							<p className="mt-6 flex items-baseline justify-center gap-x-2">
								<span className="text-5xl font-bold tracking-tight text-gray-900">
									{price}
								</span>
								<span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
									Hariq Coins
								</span>
							</p>
							<Link
								href="https://discord.gg/hariqmc-978073402118111332"
								// onClick={() => buyHandler()}
								target="_blank"
								className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Get Rank
							</Link>
							<p className="mt-6 text-xs leading-5 text-gray-600">
								Invoices and receipts available for easy company
								reimbursement
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
