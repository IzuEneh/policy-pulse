import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-5 p-24">
			<h1>Recent Policies in your Area</h1>
			<div className="flex flex-row justify-between w-full">
				<div>
					<h2>federal</h2>
					<div className="bg-slate-100 w-96 h-72 flex flex-col rounded-lg">
						{" "}
					</div>
				</div>
				<div>
					<h2>state</h2>
					<div className="bg-slate-100 w-96 h-72 flex flex-col rounded-lg">
						{" "}
					</div>
				</div>
				<div>
					<h2>local</h2>
					<div className="bg-slate-100 w-96 h-72 flex flex-col rounded-lg">
						{" "}
					</div>
				</div>
			</div>
			<div className="bg-slate-100 w-1/2 rounded-xl p-2">
				<p className="text-black">Search other policies</p>
			</div>
		</main>
	);
}
