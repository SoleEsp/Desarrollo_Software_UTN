// render de la vista categorias

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "./persistence/localstorage";
import { handleRenderList } from "./views/store";

const handleFilterProductByCategory = (categoryIn) => {
    constproducts = handleGetProductLocalStorage()


    switch(categoryIn) {
        case categoriaActiva:
            handleRenderList(products)
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categories == categoryIn)
            handleRenderList(result);
        default:
            break;
        case "mayorPrecio":
            const resultprecioMayor = products.sort((a,b) => b.precio - a.precio)
            handleRenderList(resultprecioMayor);
            break;
        case "menorPrecio":
            const resultprecioMenor = products.sort((a,b) => a.precio - b.precio);
            handleRenderList(resultprecioMenor)
            break;
    }
}

export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburgueas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="MayorPrecio">Mayor precio</li>
    <li id="MenosPrecio">Menor Precio</li>
    `;
    const liElements = ulList.querySelectorAll("li")
    liElements.forEach((liElements)=>{
        liElements.addEventListener("click", () => {
            handleClick(liElements);
        });
    });
    const handleClick = (elemento) => {
        handleFilterProductByCategory(elemento.id)
        liElements.forEach((el)=>{
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive");
            } else {
                if (elemento == el) {
                    el.classList.add("liActive")
                }
            }
        })
    };
};