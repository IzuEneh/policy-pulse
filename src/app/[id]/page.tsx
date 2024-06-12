export default function Details({ params }: { params: { id: string } }) {
	return (
		<main>
			<p>This is the deatils page for id: {params.id}</p>
		</main>
	);
}
