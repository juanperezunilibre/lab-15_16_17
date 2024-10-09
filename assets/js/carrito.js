// variable tipo object que contiene los métodos

/**
 * Objeto de funciones
 */
export const cart = {}

/** obtiene los productos del local storage */
cart.get = () => JSON.parse(localStorage.getItem("carrito")) ?? []

/** guardamos los datos en el local storage */
cart.save = (data) => localStorage.setItem("carrito", JSON.stringify(data))

/** cuenta los elementos que hay seleccionados */
cart.count = () => cart.get().length

/** verifica si el carrito está vacío */
cart.isEmpty = () => cart.count() == 0

/** eleimina el elemento al darle clic al carrito */
cart.deleteItem = (item) => {
    let items = cart.get()
    const idx = items.findIndex(i => i.name == item.name)
    items.splice(idx, 1)
    console.log(items)
    cart.save(items)
}
