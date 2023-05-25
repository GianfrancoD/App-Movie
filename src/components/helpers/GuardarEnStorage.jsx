export const GuardarEnStorage = (clave, elemento) => {        

    // conseguir los elementos que ya tenemos en el almacenamiento Localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos);
    
    // comprobar si es un array
    if(Array.isArray(elementos)){
        elementos.push(elemento);
    }else{
        elementos = [elemento];
    }

    // guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // devolver objeto guardado
    return elemento;

    

}