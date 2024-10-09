import { cart } from "./carrito.js"

const menuToggleButton = document.getElementById("menu-toggle-button")

const navMenu = document.getElementById("nav-menu")


menuToggleButton.addEventListener("click", function() {
    navMenu.classList.toggle("visible")
})


const products = [
    {
        id: 1,
        name: "Café expresso",
        description: "tanto en grano como molido, para preparar en máquinas de espresso o cafeteras italianas.",
        price: 2000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1Ep32Nhm74pWEGTDGs9FGcoOmL0PtLPC7g&s"
    },
    {
        id: 2,
        name: "Café americano",
        description: "una opción ligera y suave para quienes prefieren algo menos intenso.",
        price: 2500,
        image: "https://apasionados-por-el-cafe.s3.amazonaws.com/wp-content/uploads/2020/06/taza-de-cafe-americano.jpg"
    },
    {
        id: 3,
        name: "Café colombiano",
        description: "tanto en grano como molido, para preparar en máquinas de espresso o cafeteras italianas.",
        price: 5000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1Ep32Nhm74pWEGTDGs9FGcoOmL0PtLPC7g&s"
    },
    {
        id: 4,
        name: "Café tostao",
        description: "tanto en grano como molido, para preparar en máquinas de espresso o cafeteras italianas.",
        price: 5000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1Ep32Nhm74pWEGTDGs9FGcoOmL0PtLPC7g&s"
    },
]


function seleccionarProducto (item) {
    let carrito = cart.get()
    let found = carrito.find(i => i.name === item.name)
    
    if (found) {
        found.quantity++
        found.subtotal = found.quantity * found.price
    } else {
        carrito.push({
            id: carrito.length + 1,
            name: item.name,
            quantity: 1,
            price: item.price,
    
        })
    }
    
    cart.save(carrito)
    alert(`Producto ${item.name} añadido al carrito`)
}

function populateProducts () {
    let productsGrid = document.getElementById("products-grid")
    
    for(let item of products) {
        // aqui creamos los elementos
        let article = document.createElement("article")
        let img = document.createElement("img")
        let p = document.createElement("p")
        let strong = document.createElement("strong")
        let span = document.createElement("span")
        let button = document.createElement("button")
    
        // añadir clases al elemento article
        article.classList.add("product-card")

        // seteamos la imagen por cada producto al img
        img.src = item.image

        // <strong>Cafe americano</strong>
        strong.innerHTML = item.name

        // se añade el strong al elemento p
        p.appendChild(strong)

        // concatenamos la descripcion por cada producto al contenido del elemento p
        p.innerHTML += ` ${item.description}`

        // agregamos el precio por cada elemento al elemento span
        span.innerHTML = `$ ${item.price}`

        // Agregamos el texto al boton
        button.innerHTML = "Agregar al carrito"

        // asignamos la funcion para cuando hagamos clic en el boton
        button.onclick = () => seleccionarProducto(item)

        // añadiendo el elementos al elemento article
        article.appendChild(img)
        article.appendChild(p)
        article.appendChild(span)
        article.appendChild(button)

        // añadimos cada article a la lista de productos
        productsGrid.appendChild(article)
    }
}


document.addEventListener("DOMContentLoaded", () => { 
    const cartLink = document.getElementById("cart-link")
    cartLink.innerHTML += cart.count() > 0 ? ` (${cart.count()})` : ""
    populateProducts()
})
