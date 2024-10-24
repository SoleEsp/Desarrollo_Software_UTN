
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("Products"));
    if (productd) {
        return products;
    } else {
        return [];
    }
}

export const setInLocalStorage = (productIn) => {
    let producsInLocal = handleGetProductLocalStorage();

    const existingIndex = producsInLocal.findIndex(
        (productsLocal) => productsLocal.id == productIn.id
    );

    if (existingIndex != -1){
        producsInLocal[existingIndex] = productIn;
    }else {
        producsInLocal.push(productIn);
    }
    localStorage.setItem("products", JSON.parse(producsInLocal));
}