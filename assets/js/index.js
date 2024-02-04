/*  CREACIÓN DE ARREGLOS:
    A continuación se generan los dos arreglos; Uno para ventas y otro para alquiler. Cumpliendo con la estructura, se añaden los 4
    elementos según se solicita.
*/
const propiedades_venta = [
{
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5.000,
    smoke: false,
    pets: false
},

{
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1.200,
    smoke: true,
    pets: true
},

{
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4.500,
    smoke: false,
    pets: true
},
{
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: './assets/img/venta_4.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsa.',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 4,
    costo: 3.200,
    smoke: false,
    pets: true
},
{
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: './assets/img/venta_5.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsa.',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 2,
    banos: 2,
    costo: 2.500,
    smoke: true,
    pets: false
},
{
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: './assets/img/venta_6.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsa.',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 5,
    banos: 3,
    costo: 6.500,
    smoke: true,
    pets: true
},
{
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: './assets/img/venta_7.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsa.',
    ubicacion: '9515 Northridge Ave NE, Albuquerque, NM 87111',
    habitaciones: 2,
    banos: 2,
    costo: 3.800,
    smoke: false,
    pets: false
}
]

const propiedades_alquiler = [
{
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2.000,
    smoke: false,
    pets: true
},

{
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 2.500,
    smoke: true,
    pets: true
},

{
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2.200,
    smoke: false,
    pets: false
},
{
    nombre: 'Condominio moderno en zona residencial',
    src: './assets/img/arriendo_4.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsa.',
    ubicacion: '2005 Redondo Peak, Albuquerque, NM 87120',
    habitaciones: 4,
    banos: 3,
    costo: 5.500,
    smoke: true,
    pets: true
},
{
    nombre: 'Condominio moderno en zona residencial',
    src: './assets/img/arriendo_5.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsa.',
    ubicacion: '5683 University Blvd SE, Albuquerque, NM 87106',
    habitaciones: 3,
    banos: 2,
    costo: 3.640,
    smoke: false,
    pets: false
},
{
    nombre: 'Condominio moderno en zona residencial',
    src: './assets/img/arriendo_6.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsa.',
    ubicacion: '7416 Don Tomas Ln NE, Albuquerque, NM 87109',
    habitaciones: 3,
    banos: 3,
    costo: 5.100,
    smoke: true,
    pets: true
},
{
    nombre: 'Condominio moderno en zona residencial',
    src: './assets/img/arriendo_7.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsa.',
    ubicacion: '9361 Sidreaux Loop NW, Albuquerque, NM 87114',
    habitaciones: 4,
    banos: 2,
    costo: 4.590,
    smoke: true,
    pets: false
}
]

/*  IDENTIFICACIÓN DE CONTENEDORES REFERENCIA
    Con las siguientes líneas de codigo identificamos los contenedores en donde se inyectaran los template al recorrer 
    los distintos arreglos.

    Como la página principal muestra propiedades en venta y en alquiler, se definen dos variables como referencia a los
    contenedores de ventas y alquiler respectivamente.
*/
const contenedor_venta = document.getElementById ("venta");
const contenedor_alquiler= document.getElementById ("alquiler");

/*  IDENTIFICACIÓN DE LA PÁGINA ACTUALMENTE ABIERTA
    Utilizado para discriminar que código se ejecutará en cada una de las páginas:
    - Pagina de index -> index.html
    - Pagina de propiedades en venta -> propiedades_venta.html
    - Página de propiedades en alquiler -> propiedades_alquiler.html
*/

var path = window.location.pathname;
var page = path.split("/").pop();


if(page === "index.html"){                          //Si la página abierta es el index.html

    /*  Si la página abierta es el index.html, cuando esta se abra y cargue ejecutaré la funcion "mostrarPropiedades" dos veces. 
        Esta función es la encargada de desplegar la información de las propiedades en función del argumento ingresado. A partir 
        de esto, la primera vez que llame a la función, lo haré ingresando el argumento "venta" como parámetro para mostrar las
        propiedades en venta y la segúnda, lo haré entregando el argumento "alquiler" como parámetro para mostrar las propiedades
        en alquiler
     */
    window.addEventListener("load", function() {    
        mostrarPropiedades ("venta");
        mostrarPropiedades ("alquiler");
    });
    
}
else if (page === "propiedades_venta.html"){

    /*  Si la página abierta es el propiedades_venta.html, cuando esta se abra y cargue ejecutaré la funcion "mostrarPropiedades"
        entregando el argumento "venta" como parámetro para mostrar propiedades en venta
     */
    window.addEventListener("load", function() {
        mostrarPropiedades ("venta");
    });
    
}
else if (page === "propiedades_alquiler.html"){

    /*  Si la página abierta es el propiedades_alquiler.html, cuando esta se abra y cargue ejecutaré la funcion "mostrarPropiedades"
        entregando el argumento "alquiler" como parámetro para mostrar propiedades en alquiler
     */ 
    window.addEventListener("load", function() {
        mostrarPropiedades ("alquiler");
    });

}


    
const mostrarPropiedades = (tipo) => {


    let contenedor = null;
    let arregloPropiedades =[];

    if(page === "index.html"){

        if(tipo==="venta"){
            contenedor=contenedor_venta
            for (let i=0; i<3; i++){
            arregloPropiedades.push(propiedades_venta[i]);
            }
        }
        else if(tipo ==="alquiler"){
            contenedor=contenedor_alquiler
            for (let i=0; i<3; i++){
            arregloPropiedades.push(propiedades_alquiler[i]);
            }
        }
    }

    else if (page === "propiedades_venta.html"){
        contenedor=contenedor_venta
        arregloPropiedades = propiedades_venta
    }
    else if (page === "propiedades_alquiler.html"){
        contenedor=contenedor_alquiler
        arregloPropiedades = propiedades_alquiler

    }


    const divRow = document.createElement("div");
    divRow.className="row";       

    for (let propiedad of arregloPropiedades){

        const divCol = document.createElement("div");
        divCol.className ="col-md-4 mb-4"; 

        const divCard = document.createElement("div");                  
        divCard.className ="card";
        divCard.innerHTML=`
        <img class="" src="${propiedad.src}"/>
        `;   
        const divCardBody = document.createElement("div")
        divCardBody.className ="card-body";
        divCardBody.innerHTML=`
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${propiedad.banos} Baños</p> 
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toFixed(3)}</p>
        <p class= "${propiedad.smoke ? "text-success":"text-danger" }"> ${propiedad.smoke ? "<i class=\"fas fa-smoking\"></i> Permitido fumar" : "<i class=\"fas fa-smoking-ban\"></i> No se permite fumar "}</p>
        <p class= "${propiedad.pets ? "text-success":"text-danger" }"> ${propiedad.pets ?  "<i class=\"fas fa-paw\"></i> Mascotas permitidas" : "<i class=\"fa-solid fa-ban\"></i> No se permiten mascotas"}</p>
        `;  

        divRow.appendChild(divCol);
        divCard.append(divCardBody) 
        divCol.appendChild(divCard)

    }      
    
    contenedor.children[1] === undefined ?  contenedor.append(divRow): contenedor.insertBefore(divRow,contenedor.children[1]);
      
}
