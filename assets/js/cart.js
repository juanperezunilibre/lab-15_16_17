import { cart } from "./carrito.js"

function onChangeQuantity(item, quantity) {
    let newCarrito = cart.get().map(i => {
        if (i.name === item.name) {
            i.quantity = quantity
            i.subtotal = quantity * i.price
            return i
        }
        return i
    })
    cart.save(newCarrito)
    populateCart()
}

function handleDeleteItem(item) {
    console.log(item)
    cart.deleteItem(item)
    populateCart()
}

function populateCart() {
    let carrito = cart.get()
    let cartList = document.getElementById("cart-list")

    cartList.innerHTML = ""

    /* <div>
        No hay productos seleccionados
    </div>*/

    if (cart.isEmpty()) {
        cartList.innerHTML = "No hay productos seleccionados"
        return
    }

    for (let item of carrito) {
        let article = document.createElement("article")
        let h2 = document.createElement("h2")
        let input = document.createElement("input")
        let span = document.createElement("span")
        let spanSubtotal = document.createElement("span")
        let button = document.createElement("button")

        input.type = "number"
        input.min = 1
        input.max = 50
        input.onchange = (e) => onChangeQuantity(item, e.target.value)

        h2.innerHTML = item.name
        input.value = item?.quantity ?? 1
        span.innerHTML = item.price
        spanSubtotal.innerHTML = item.quantity * item.price

        button.innerHTML = "Eliminar"
        button.onclick = () => handleDeleteItem(item)

        article.appendChild(h2)
        article.appendChild(input)
        article.appendChild(span)
        article.appendChild(spanSubtotal)
        article.appendChild(button)

        cartList.appendChild(article)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    populateCart()
})