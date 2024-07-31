import Summary from "@/components/ui/summary";

interface Props {
  sections: {
    title: string;
    subtitle: string;
    data: {
      id: string;
      title: string;
      summary: string;
    }[];
  }[];
}

export default function MobileHome({ sections }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <h1 className="text-4xl font-bold px-5 pt-5">Recent Policies in your Area</h1>
      <div className="flex flex-1 flex-col w-full gap-6">
        {sections.map((section, sectionIndex) => (
          <>
            <div className="flex flex-1 flex-col p-5" key={sectionIndex}>
              <h2 className="text-2xl capitalize font-bold">{section.title}</h2>
              <p className="text-lg">{section.subtitle}</p>
              <div className="flex flex-1 flex-col gap-4 mt-3">
                {section.data.map((item, index) => (
                  <>
                    <Summary
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      summary={item.summary}
                    />
                    {index !== section.data.length - 1 ? (
                      <div className="w-full border bg-slate-700"></div>
                    ) : null}
                  </>
                ))}
              </div>
            </div>
            {sectionIndex !== sections.length - 1 ? (
              <div className="w-100 h-3 border bg-slate-400"></div>
            ) : null}
          </>
        ))}
      </div>
    </main>
  );
}
