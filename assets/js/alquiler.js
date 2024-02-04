


const element = document.getElementById ("alquiler");

const divRow = document.createElement("div")
divRow.className ="row"

for (let propiedad_en_alquiler of propiedades_alquiler){

    const divCol = document.createElement("div")
    divCol.className ="col-md-4 mb-4"

    const divCard = document.createElement("div")
    divCard.className ="card"  
    divCard.innerHTML=`
        <img class="" src="${propiedad_en_alquiler.src}"/>
    `   

    const divCardBody = document.createElement("div")
    divCardBody.className ="card-body"
    divCardBody.innerHTML=`
        <h5 class="card-title">${propiedad_en_alquiler.nombre}</h5>
        <p class="card-text">${propiedad_en_alquiler.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad_en_alquiler.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${propiedad_en_alquiler.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${propiedad_en_alquiler.banos} Baños</p> 
        <p><i class="fas fa-dollar-sign"></i> ${propiedad_en_alquiler.costo.toFixed(3)}</p>
        <p class= "${propiedad_en_alquiler.smoke ? "text-success":"text-danger" }"> ${propiedad_en_alquiler.smoke ? "<i class=\"fas fa-smoking\"></i> Permitido fumar" : "<i class=\"fas fa-smoking-ban\"></i> No se permite fumar "}</p>
        <p class= "${propiedad_en_alquiler.pets ? "text-success":"text-danger" }"> ${propiedad_en_alquiler.pets ?  "<i class=\"fas fa-paw\"></i> Mascotas permitidas" : "<i class=\"fa-solid fa-ban\"></i> No se permiten mascotas"}</p>
    `  
    divCard.append(divCardBody) 
    divCol.appendChild(divCard)
    divRow.appendChild(divCol);
}




element.appendChild(divRow);
