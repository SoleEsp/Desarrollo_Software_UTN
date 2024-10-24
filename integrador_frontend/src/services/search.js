import { handleGetProductLocalStorage } from "./persistence/localstorage";
import { handleRenderList } from "./views/store";


export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductLocalStorage()
    console
    const result = products.filtre((el) =>
    el.nombre.tolowerCase().includes(inputHeader.value)
    );
    handleRenderList(result);
}