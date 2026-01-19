import getWikiResults from "@/lib/getWikiResults";


type Props = {
    params: { searchTerm: string }
}

type SearchResult = {
    query: {
        pages: Result[]
    }
}

type Result = {
    title: string,
    extract: string
}

export default async function SearchResults({params: {searchTerm} }:Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data: SearchResult | null = await wikiData;

  if(!data){
    return <main>No data found</main>
  }

  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-zinc-200 rounded m-3 text-purple-900 mx-auto w-[75vw] p-4 min-h-screen">
      {results
        ? Object.values(results).map((result, index) => {
          return <p key={index}>{JSON.stringify(result)}</p>
        })
        : <h2 className="p-2 text-xl">{`${searchTerm} not founnd!`}</h2>
      }
    </main>
  )
   
  return content;
}