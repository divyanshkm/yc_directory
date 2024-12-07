import { SearchForm } from "../../components/ui/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          PITCH YOUR STARTUP <br /> WITH US.
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas and get noticed in the world of startups
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
