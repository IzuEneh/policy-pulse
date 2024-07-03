export function generateStaticParams() {
  return [{ id: 'bill-0' }, { id: 'bill-1' }]
}

const fullSummary = {
	id: 1,
	title:
		"H.R. 8070 - Servicemember Quality of Life Improvement and National Defense Authorization Act for Fiscal Year 2025",
	summary:
		"Authorizes appropriations for fiscal year 2025 for military activities of the Department of Defense (DoD), military construction, and defense activities of the Department of Energy. Also prescribes military personnel strengths for fiscal year 2025 and addresses other related purposes.",
	notableSections: [
		{
			id: 1,
			title: "Defense Spending",
			description:
				"Authorizes funding for various defense programs, including procurement, research and development, and military construction.",
		},
		{
			id: 2,
			title: "Military Personnel",
			description:
				"Addresses various aspects of military personnel policy, including end strengths, officer grade distributions, and personnel benefits.",
		},
		{
			id: 3,
			title: "Energy and Environment",
			description:
				"Includes provisions related to energy resilience and security, sustainable aviation fuel, and environmental remediation at military installations.",
		},
	],
};

export default function Details({ params }: { params: { id: string } }) {
	return (
		<main className="flex min-h-screen flex-col p-5 gap-5">
			<h1 className="text-4xl">{fullSummary.title}</h1>
			<div className="flex flex-1 flex-col gap-5">
				<div>
					<h2 className="text-2xl">General Summary</h2>
					<div>
						<p>{fullSummary.summary}</p>
					</div>
				</div>
				<div className="flex flex-1 flex-col">
					<h2 className="text-2xl">Notable Excerpts</h2>
					<div className="flex flex-1 gap-3 flex-col">
						{fullSummary.notableSections.map((section) => (
							<div key={section.id}>
								<h3 className="text-lg">{section.title}</h3>
								<p>{section.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
