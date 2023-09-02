interface people {
	name: string;
	role: string;
	imageUrl: string;
}

const Staff = ({ children }: { children: React.ReactNode }) => {
	return children;
};

const header = ({ onClick }: { onClick: () => void }) => {
	return (
		<div className="staff-header flex h-screen flex-col justify-center items-center gap-5">
			<div className="heading text-4xl">
				<h1 className="uppercase">
					<span className="text-sky-500">Staff</span>{" "}
					<span className="text-amber-300">Roaster</span>
				</h1>
			</div>
			<div className="staff-text text-white">
				Mau Lihat Sosok Sosok Yang Sudah Membangun Dan Berkontribusi
				Dalam proses pembangunan Server Minecraft Dan Website Hariq?
			</div>
			<div className="buttonScroll">
				<button onClick={() => onClick()}>Klik Disini</button>
			</div>
		</div>
	);
};

const body = ({ people }: { people: people[] }) => {
	return (
		<div className="mx-auto grid max-w-7xl h-screen gap-x-10 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
			<ul
				role="list"
				className="grid gap-x-8 gap-y-12 justify-center  sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
			>
				{people.map((person) => (
					<li key={person.name}>
						<div className="flex items-center border rounded-xl p-6 bg-slate-800 gap-x-6">
							<img
								className="h-16 w-16 rounded-full"
								src={person.imageUrl}
								alt=""
							/>
							<div>
								<h3 className="text-base font-semibold leading-7 tracking-tight text-slate-300">
									{person.name}
								</h3>
								<p className="text-sm font-semibold leading-6 text-lime-400">
									{person.role}
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

Staff.header = header;
Staff.body = body;

export default Staff;
