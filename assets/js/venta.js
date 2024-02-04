



const element = document.getElementById ("venta");

const divRow = document.createElement("div")
divRow.className ="row"

for (let propiedad_en_venta of propiedades_venta){

    const divCol = document.createElement("div")
    divCol.className ="col-md-4 mb-4"

    const divCard = document.createElement("div")
    divCard.className ="card"  
    divCard.innerHTML=`
        <img class="" src="${propiedad_en_venta.src}"/>
    `   

    const divCardBody = document.createElement("div")
    divCardBody.className ="card-body"
    divCardBody.innerHTML=`
        <h5 class="card-title">${propiedad_en_venta.nombre}</h5>
        <p class="card-text">${propiedad_en_venta.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad_en_venta.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${propiedad_en_venta.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${propiedad_en_venta.banos} Baños</p> 
        <p><i class="fas fa-dollar-sign"></i> ${propiedad_en_venta.costo.toFixed(3)}</p>
        <p class= "${propiedad_en_venta.smoke ? "text-success":"text-danger" }"> ${propiedad_en_venta.smoke ? "<i class=\"fas fa-smoking\"></i> Permitido fumar" : "<i class=\"fas fa-smoking-ban\"></i> No se permite fumar "}</p>
        <p class= "${propiedad_en_venta.pets ? "text-success":"text-danger" }"> ${propiedad_en_venta.pets ?  "<i class=\"fas fa-paw\"></i> Mascotas permitidas" : "<i class=\"fa-solid fa-ban\"></i> No se permiten mascotas"}</p>
    `  
    divCard.append(divCardBody) 
    divCol.appendChild(divCard)
    divRow.appendChild(divCol);
}




element.appendChild(divRow);