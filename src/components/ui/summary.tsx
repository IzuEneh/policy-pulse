import Link from "next/link";

type Props = {
	id: string;
	title: string;
	summary: string;
};

function Summary({ id, title, summary }: Props) {
	return (
		<Link href={`/${id}`} className="hover:bg-slate-100">
			<div className="flex flex-col gap-2">
				<span className="font-medium">{title}</span>
				<p>{summary}</p>
			</div>
		</Link>
	);
}

export default Summary;
