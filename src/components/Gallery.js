
import Slider from './Slider';




function Gallery() {

    const images = [
        'https://www.datocms-assets.com/44717/1708528749-coffee-shop.jpg',
        'https://cdn.pixabay.com/photo/2023/08/30/17/29/ai-generated-8223836_640.jpg',
        'https://www.dictionary.com/e/wp-content/uploads/2019/01/hipster-coffee-shop-4.jpg',
        'https://www.neorestauration.com/mediatheque/9/1/3/000021319_1200x800_c.jpg',
    ];

    return (
        <section id="gallery" className="bg-zinc-900 text-white p-5">
            <h1 className="text-center dancing-font font-bold text-3xl lg:text-4xl p-5">Découvrez l'espace chaleureux de notre café!</h1>
            <div className='min-h-96 p-5'>
                <Slider images={images} interval={3000} />
            </div>
        </section>
    )
}


export default Gallery;