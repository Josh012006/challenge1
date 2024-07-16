


function Home() {
    return(
        <section className="bg-black flex flex-col items-center" id="home">
            <iframe src="https://www.youtube.com/embed/0jIeCAOkgcQ?si=LpR5V4B2oXDv2aE7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full min-h-96" autoPlay ></iframe>
            <div className="m-5 min-h-96 bg-zinc-900 rounded-lg grid grid-cols-1 lg:grid-cols-3 w-4/5 lg:w-3/4 text-white">
                <div className="h-full w-full min-h-48 col-span-1 homeImage"></div>
                <div className="text-justify col-span-1 lg:col-span-2">
                    <h1 className="text-center dancing-font text-2xl m-4">Votre pause gourmande au cœur de la ville !</h1>
                    <div className="py-5 px-9">
                        <p className="indent-6">Bienvenue au Café du Coin, votre refuge chaleureux au cœur de la ville. Ici, nous croyons que chaque tasse de café raconte une histoire, celle de grains soigneusement sélectionnés et torréfiés avec passion pour éveiller vos sens.Notre café, fraîchement moulu chaque jour, vous offre une expérience riche et aromatique qui ravit les amateurs comme les connaisseurs.</p>
                        <br />
                        <p className="indent-6">Mais le Café du Coin, c'est bien plus qu'une simple boisson chaude : c'est un lieu de rencontres, de détente et de convivialité. Que vous veniez pour un espresso rapide ou pour savourer un latte en lisant votre livre préféré, vous trouverez chez nous une ambiance accueillante et authentique. Venez découvrir le charme unique de notre café, où chaque visite est une invitation à savourer l'instant présent.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Home;