// export const dynamic = "force-dynamic"
async function getCatFact() {

    const res = await fetch("https://catfact.ninja/fact", {cache: "no-store"})
    const data = await res.json()
     
   return data
}

export default async function Home() {
    const catFact = await getCatFact()

    return (
        <div className="page">
            <main className="main">
                <h1>🐈‍⬛ Cat Facts 🐈</h1>
                <div className="fact-card">
                    <p className="fact-text">{catFact.fact}</p>
                </div>
            </main>
        </div>
    )
}
