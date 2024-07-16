import React from 'react';

const drinks = [
{ name: 'Latte', price: '1200 Fcfa' , url: 'https://liliebakery.fr/wp-content/uploads/2023/10/Latte-macchiato-Lilie-Bakery.jpg' },
{ name: 'Cappuccino', price: '800 Fcfa' , url: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-CAPPUCCINO-BANANA-SESAME-SEEDS.jpg' },
{ name: 'Espresso', price: '750 Fcfa' , url: 'https://www.tasteofhome.com/wp-content/uploads/2023/03/TOH-espresso-GettyImages-1291298315-JVcrop.jpg' },
{ name: 'Frappuccino', price: '1500 Fcfa' , url: 'https://www.lavazza.co.uk/content/dam/lavazza-athena/b2c/stories/article/coffee-secrets/how-to-make-frappuccino-home/hero/m-Frappuccino.jpg' },
];

const snacks = [
{ name: 'Croissant', price: '500 Fcfa' , url: 'https://therecipecritic.com/wp-content/uploads/2022/09/crossaints-2.jpg' },
{ name: 'Egg Sandwich', price: '450 Fcfa' , url: 'https://simply-delicious-food.com/wp-content/uploads/2020/07/Easy-salad-sandwiches-with-herb-mayo-5-500x500.jpg' },
{ name: ' Beef Sandwich', price: '1700 Fcfa' , url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/low-calorie-roast-beef-cheddar-sandwiches-horseradish-mayo.jpg?quality=82&strip=1' },
{ name: 'Snickers', price: '300 Fcfa' , url: 'https://m.media-amazon.com/images/I/61XSrUOrZzL.jpg' },
];

const Menu = () => {
return (
<section id="menu" className="w-full mx-auto p-8 bg-black text-white">
    <h1 className="text-4xl font-bold text-center mb-8">Café Menu</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
        <h2 className="text-2xl font-semibold mb-4">Drinks</h2>
        <ul>
        {drinks.map((drink, index) => (
            <li key={index} className="flex justify-between border-b py-2">
            <img className='h-40 w-40' src={drink.url} alt="drink" />
            <span>{drink.name}</span>
            <span>{drink.price}</span>
            </li>
        ))}
        </ul>
    </div>
    <div>
        <h2 className="text-2xl font-semibold mb-4">Snacks</h2>
        <ul>
        {snacks.map((snack, index) => (
            <li key={index} className="flex justify-between border-b py-2">
            <img className='h-40 w-40' src={snack.url} alt="drink" />
            <span>{snack.name}</span>
            <span>{snack.price}</span>
            </li>
        ))}
        </ul>
    </div>
    </div>
</section>
);
};

export default Menu;