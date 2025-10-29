async function getCatFacts() {
    const response = await fetch("https://catfact.ninja/facts")
    const data = await response.json()
    return data.data
}

export default async function Home({ searchParams }) {
    const { query } = await searchParams
    const catFacts = await getCatFacts()

    const filteredFacts = query
        ? catFacts.filter(obj => obj.fact.toLowerCase().includes(query.toLowerCase()))
        : catFacts

    return (
        <div className="page">
            <main className="main">
                <h1>🐈‍⬛ Cat Facts 🐈</h1>
                <form className="search-form">
                    <label htmlFor="cat-fact-query" className="sr-only">
                        Search cat facts
                    </label>
                    <input
                        type="search"
                        id="cat-fact-query"
                        name="query"
                        placeholder="Search cat facts..."
                        className="search-input"
                        autoComplete="off"
                        defaultValue={query}
                    />
                </form>
                <div className="facts-list">
                    {filteredFacts.map((fact, index) => (
                        <div key={index} className="fact-card">
                            <p className="fact-text">{fact.fact}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
