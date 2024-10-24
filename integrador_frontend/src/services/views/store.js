import { openModal } from "../../../main";
import { renderCategories } from "../categories";
import { handleGetProductLocalStorage } from "../persistence/localstorage";

handleGetProductToStore();
renderCategories();

export const handleGetProductToStore = () => {

    const products = handleGetProductLocalStorage()
    handleRenderList(products);
};

export const handleRenderList = (productIn) => {
    const burgers = productIn.filter((el) => el.categories == "Hamburguesas");
    const papas = productIn.filter((el) => el.categories == "Papas");
    const gaseosas = productIn.filter((el) => el.categories == "Gaseosas");

    const rederProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `<div id = 'product-${producto.categories}-${index}'>
                <div>
                <img src='${producto,imagen}'/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div>
                <p><b>Precio:</b> $ ${producto.precio}</p>
                <p><b>Categoria:</b> $ ${producto.categoria}</p>
                `
            });
            return ` 
            <section class= "sectionStorage">
            <h3>${title}</h3>
            <div>
                ${productosHTML.join("")}
            </div>
            </section>
            `;
        }else {
            return "";
        }
    }

    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${rederProductGroup(burgers, "Hamburguesas")}
    ${rederProductGroup(papas, "Papas")}
    ${rederProductGroup(gaseosas, "Gaseosas")}
    `
    
    const addEvents = (productsIn) => {
        productsIn.array.forEach((element, index) => {
            const productContainer = document.getElementById(`
                product-${element.categories}-${index})
                `)
                productContainer.addEventListener("click", () => {
                    setprodutoActivo(element);
                    openModal();
                });
        });
    }
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);

};