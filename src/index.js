// Declaramos un arreglo de nombres
const messages = [
    "Wendy",
    "Melissa",
    "Laura",
    "Victor",
    "ALbert",
    "katy",
    "toxo"
];

//Creamso nuestra funcion random
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}
module.exports = {randomMsg};