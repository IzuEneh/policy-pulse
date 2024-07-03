import Link from "next/link";

type Props = {
	id: string;
	title: string;
	summary: string;
};

function Summary({ id, title, summary }: Props) {
	return (
		<Link href={`/${id}`} className="bg-slate-100 hover:bg-slate-200">
			<div>
				<span>{title}</span>
				<p>{summary}</p>
			</div>
		</Link>
	);
}

export default Summary;
