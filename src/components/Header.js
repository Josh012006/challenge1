import { useState } from "react";



function Header() {

    const [display, setDisplay] = useState('hidden');

    const handleToggle = () => {
        if(display === 'hidden') {
            setDisplay('grid');
        } else {
            setDisplay('hidden');
        }
    }

    return(
        <header className="bg-black grid grid-col-1 lg:grid-cols-12 items-center border-b border-b-gray-500">
            <div className="flex flex-col items-center lg:flex-row col-span-1 lg:col-span-6 justify-center lg:justify-start pl-24">
                <img alt="brand" className="m-3" src="/logo.png"/>
                <h1 className="font-bold text-3xl lg:text-4xl text-center text-orange-100 dancing-font">Le Café du Coin</h1>
            </div>
            <i className="fa-solid fa-bars col-span-1 lg:hidden block text-gray-500 text-3xl p-3 cursor-pointer" onClick={handleToggle}></i>
            <nav className={`${display} lg:grid lg:grid-cols-4 grid-cols-1 text-white text-center col-span-1 lg:col-span-6 my-3 lg:my-0`}>
                <a href="#home">Accueil</a>
                <a href="#menu">Menu</a>
                <a href="#gallery">Galerie</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}



export default Header;