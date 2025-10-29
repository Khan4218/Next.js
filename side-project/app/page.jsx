async function getCatFacts() {
    const response = await fetch("https://catfact.ninja/facts")
    const data = await response.json()
    return data.data
}

export default async function Home() {
    const catFacts = await getCatFacts()

    return (
        <div className="page">
            <main className="main">
                <h1>🐈‍⬛ Cat Facts 🐈</h1>

                {/** search form here */}
                <form >
                   <input type="text" name="search" placeholder="Search"></input>
                </form>

                <div className="facts-list">
                    {catFacts.map((fact, index) => (
                        <div key={index} className="fact-card">
                            <p className="fact-text">{fact.fact}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}