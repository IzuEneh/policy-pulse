import Link from "next/link";

type Props = {
	id: string;
	title: string;
	summary: string;
};

function Summary({ id, title, summary }: Props) {
	return (
		<Link href={`/${id}`}>
			<div>
				<span>{title}</span>
				<p>{summary}</p>
			</div>
		</Link>
	);
}

export default Summary;
