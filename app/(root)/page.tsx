import { title } from "process";
import { SearchForm } from "../components/SearchForm";
import StartupCard from "../../components/ui/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createAt: new Date().toLocaleDateString(),
      views: 55,
      author: {
        _id: 1,
        name: "John Doe",
      },
      _id: 1,
      description: "description",
      image:
        "https://as2.ftcdn.net/v2/jpg/02/10/96/95/1000_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];
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
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? 'Search results for "' + query + '"' : "Trending startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No posts</p>
          )}
        </ul>
      </section>
    </>
  );
}
