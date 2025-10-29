export const dynamic = "force-dynamic"
async function getCatFact() {
    return {
        fact: "Cats step with both left legs, then both right legs when they walk or run."
    }
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
