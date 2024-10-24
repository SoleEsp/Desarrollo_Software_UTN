import { renderCategories } from "./src/services/categories";
import './style.css'
import { handleGetProductsToStorage } from "./src/views/store";
import { setInLocalStorage } from "./src/services/persistence/localstorage";
import { handleSearchProductByName } from "./src/services/search";
window.onload = () => {
    renderCategories();
  };


export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) =>{
    categoriaActica = categoriaIn;
}

export let productoActivo = null;
export const setproductoActiva = (categoriaIn) =>{
    categoriaActica = categoriaIn;
}


const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
    handleSearchProductByName() 
})


/*popup */

const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", ()=> {
    openModal();
});

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click",() =>{
    handleCancelButton();
})
const handleCancelButton = () => {
    closeModal();
}

export const openModal = () => {
    const modal=document.getElementById("modalPopUP");
    modal.style.display = "flex";

    if (productoActivo) {
        const nombre = document.getElementById("nombre")
        imagen = document.getElementById("img")
        precio = document.getElementById("nombre")
        categories = document.getElementById("nombre")
        nombre.value = productoActivo.nombre
        imagen.value = productoActivo.imagen;
        precio = productoActivo.precio
        categories = productoActivo.categories
    }
};
export const closeModal = () => {
    const modal=document.getElementById("modalPopUP");
    modal.style.display = "none";
    setproductoActivo(null)
    resetModal();
};

const resetModal = () => {
    const nombre = document.getElementById("nombre")
    imagen = document.getElementById("img")
    precio = document.getElementById("nombre")
    categories = document.getElementById("nombre")

    nombre.value = " ";
    imagen.value = "";
    precio = 0;
    categories = "Selecione una categoria";
}



const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
    handleSaveIrModifyElements();
});

const handleSaveIrModifyElements = () => {
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("nombre").value,
    categories = document.getElementById("nombre").value;

    let object = null
    if (productoActivo){
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories
        }
    }else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories
        }
    }
    setInLocalStorage(object);
    handleGetProductsToStorage();
    closeModal();
}
