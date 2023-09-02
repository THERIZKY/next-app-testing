import Image from "next/image";
const RulesLayouts = ({ rules }: { rules: string[] }) => {
	return (
		<>
			<div className="rules-header">
				<Image
					src="/img/animek.png"
					alt="Test"
					width={200}
					height={200}
				/>
			</div>
			<div className="rules-content">
				<h1>
					Hariq MC <span>18/02/2023 10:13</span>
				</h1>

				<div className="rules">
					{rules.map((rule, index) => {
						return (
							<div key={index}>
								<h3>
									<b>{index + 1}</b>. {rule}
								</h3>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default RulesLayouts;
