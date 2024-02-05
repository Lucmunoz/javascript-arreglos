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


if(page === "index.html"){  //Si la página abierta es el index.html

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
else if (page === "propiedades_venta.html"){ //Si la página abierta es el propiedades_venta.html

    /*  Si la página abierta es el propiedades_venta.html, cuando esta se abra y cargue ejecutaré la funcion "mostrarPropiedades"
        entregando el argumento "venta" como parámetro para mostrar propiedades en venta
     */
    window.addEventListener("load", function() {
        mostrarPropiedades ("venta");
    });
    
}
else if (page === "propiedades_alquiler.html"){ //Si la página abierta es el propiedades_alquiler.html

    /*  Si la página abierta es el propiedades_alquiler.html, cuando esta se abra y cargue ejecutaré la funcion "mostrarPropiedades"
        entregando el argumento "alquiler" como parámetro para mostrar propiedades en alquiler
     */ 
    window.addEventListener("load", function() {
        mostrarPropiedades ("alquiler");
    });

}

/*  FUNCIÓN mostrarPropiedades
    Es la función encargada de cargar en pantalla (renderizar) los objetos cada arreglo (propiedades en venta y en alquiler) según
    el tipo de página que esté abierta. En la página principal solo se mostrarán 3 elementos de cada arreglo y en la página dedicada
    ya sea de vntas o alquiler, se mostrarán en pantalla todos los objetos del arreglo.

    La función es anónima del tipo flecha.
 */
    
const mostrarPropiedades = (tipo) => {

    //Variable contenedor tendrá la referencia al elemento del DOM donde se renderizarán (inyectrán) los objetos. De momento es del tipo null.
    let contenedor = null; 
    //Creamos un arreglo vacío al cual se agregarán, mediante el metodo push, los objetos a mostrar en pantalla.
    let arregloPropiedades =[];

    /*  Antes de mostrar los objetos, tengo que definir cuantos son los que se mostrarán. Si la pagina es el index, hay una limitante de 3 elementos
            por cada arreglo. Si la pagina abierta corresponde a la pagina de propiedades en venta o alquiler, muestro todos los elementos del respectivo
        arreglo.
        */
    if(page === "index.html"){

        if(tipo==="venta"){
            
            /*Asigno a la variable contenedor la referencia al contenedor del HTML que contiene (o mas bien, contendrá) las cards una vez que estas
              renderizen mediante el uso de templates*/

            contenedor=contenedor_venta
            // arregloPropiedades contendrá los primeros 3 objetos del arreglo propiedades_venta.
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

    /*  Si la pagina abierta es la pagina de ventas o alquileres, el arreglo arregloPropiedades toma todos los elementos del arreglo propiedades_venta
        o propiedades_alquiler según corresponda*/
    else if (page === "propiedades_venta.html"){
        contenedor=contenedor_venta
        arregloPropiedades = propiedades_venta
    }
    else if (page === "propiedades_alquiler.html"){
        contenedor=contenedor_alquiler
        arregloPropiedades = propiedades_alquiler

    }

    /*  El HTML "en general" considera la siguiente estructura para mostrar las cards:

        <section id = (venta o alquiler)>
            <h2>Titulo</h2>
            <div class ="row">
                <div class ="col...">
                    <div class ="card 1"> 
                        <img>
                        <div class="card-body"><div>
                    </div>
                </div>
                <div class ="col...">
                    <div class ="card 2">
                        <img>
                        <div class="card-body"><div>
                    </div>
                </div>
                <div class ="col...">
                    <div class ="card 3">
                        <img>
                        <div class="card-body"><div>
                    </div>
                </div>
            </div>
        </section>
                 
        A partir de la estructura presentada, se observa que cada card está contenida dentro de un contenedor de clase "col..." luego, varios
        de estos contenedores (que son hermanos) están contenidos dentro de un unico contenedor de clase "row".

        Se aprecia ademas que cada card se compone de dos elementos hermanos entre si. La imagen y el cuerpo de la card.*/

            
    //  Creo un elemento div y le asigno la clase "row"
    const divRow = document.createElement("div");
    divRow.className="row";       

    /*  Procedo a recorrer el arreglo creado en la sección anterior, "arregloPropiedades", el cual se llenó con una cantidad determinada de objetos
        según el tipo de página abierta.*/
    for (let propiedad of arregloPropiedades){

        //  Creo un elemento div y le asigno la clase "col..."
        const divCol = document.createElement("div");
        divCol.className ="col-md-4 mb-4"; 

        //  Creo un elemento div y le asigno la clase "card"
        const divCard = document.createElement("div");                  
        divCard.className ="card";

        /*  Como ya dijimos la card se compone de dos elementos. La imágen y el cuerpo de la card. En primer lugar, inserto la imágen haciendo uso
        de un template */
        divCard.innerHTML=`
        <img class="" src="${propiedad.src}"/>
        `;   

        //  Creo un elemento div y le asigno la clase "card-body" (cuerpo de la tarjeta)
        const divCardBody = document.createElement("div")
        divCardBody.className ="card-body";

        /*  Haciendo uso de un template, voy cargando por referencia los datos del objeto. Como estoy dentro de un ciclo, se cargarán los datos
            de todos los objetos dentro del arreglo.*/

        divCardBody.innerHTML=`
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${propiedad.banos} Baños</p> 
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toFixed(3)}</p>

        /*
            el desafío solicita utilizar condiciones para evaluar casos particulares de cada vivienda. Si es que permiten o no fumar
            y tener o no mascotas. En virtud de cada alternativa, se muestra un respectivo icono y texto asociado. Para esto, en vez de un if
            utilizamos el operador condicional (ternario) evaluando el valor del atributo smoke y pets de cada objeto. Esto es lo mismo que hacer
            propedad.smoke ===true o False pero de una forma abreviada ya que el valor del atributo en si mismo es true o false.
        */
        <p class= "${propiedad.smoke ? "text-success":"text-danger" }"> ${propiedad.smoke ? "<i class=\"fas fa-smoking\"></i> Permitido fumar" : "<i class=\"fas fa-smoking-ban\"></i> No se permite fumar "}</p>
        <p class= "${propiedad.pets ? "text-success":"text-danger" }"> ${propiedad.pets ?  "<i class=\"fas fa-paw\"></i> Mascotas permitidas" : "<i class=\"fa-solid fa-ban\"></i> No se permiten mascotas"}</p>
        `;  

        /*
        A continuación, armo la estructura de los elementos div creados en la iteración.

        <elemento divCol>
            <elemento divCard>
                <elemento divCardBody>

         */


        divRow.append(divCol);    /*Los elementos divCol creado en cada iteración se agrega como hijo al elemento div padre (el de clase Row).
                                    Recordar que el elemento div de clase row es uno solo y se creo fuera (antes) de la iteración*/

        divCol.append(divCard);   /*Los elementos divCard creados en cada iteración, se agregan como hijo al divCol creado en la misma iteración*/  

        divCard.append(divCardBody) ; /* Los elementos divCardBody creados en cada iteración, se agregan como hijo al elemento divCard creado en la iteración*/      

    }     

    /* Una vez terminado el ciclo, tendré la siguiente estructura
    
    <div class ="row">
        <div class ="col...">
            <div class ="card 1"> 
                <img>
                <div class="card-body"><div>
            </div>
        </div>
        <div class ="col...">
            <div class ="card 2">
                <img>
                <div class="card-body"><div>
            </div>
        </div>
        <div class ="col...">
            <div class ="card 3">
                <img>
                <div class="card-body"><div>
            </div>
        </div>
    </div>
   
    
    La estructura anterior debo injectarla en algun sitio del DOM y para ello, haré uso de la variable "contenedor" la cual tiene la referencia
    al objeto del DOM donde debo inyectar la estructura recien creada pero ojo con lo siguiente:

    Ocurre que si estoy inyectando en la página principal, debo inyectar aca:
    
    <section id = (venta o alquiler)>
        <h2>Titulo</h2>
        *** inyectar aca <-----
        <a ref ver todas las propiedades> (boton negro)
    </section>

    pero si estoy en la pagina dedicada, la estructura cambia, porque ya no tengo el boton negro. 

    <section id = (venta o alquiler)>
        <h2>Titulo</h2>
        *** inyectar aca <-----
    </section>  

    Entonces, para poder detectar donde inyectar hago uso del metodo children[1] para el contenedor. Recordar que el contenedor contiene la referencia
    hacia el contenedo donde debo inyectar la información de cada objeto. el metodo Children [1] me devolverá un valor válido si es que estoy en la
    pagina de inicio (index.html) porque el contenedor.children[0] será el titulo h2 y luego el contenedor.children[1] será el anchor.

    Si estoy en una de las paginas dedicadas contenedor.children[0] será el título h2 pero luego contenedor.children [1] será indefinido al no existir
    el hijo[1]

    haciendo uso del operador condicional (ternario) evaluo esta condición -> contenedor.children[1] === undefined

    luego, si el valor es verdadero, es decir estoy en una pagina dedicada a mostrar todas las propiedades de venta o alquiler entonces,
    haciendo uso del metodo: contenedor.append(divRow) agrego el contenedor de clase row (que contiene todos los col que a su vez continen las cards)
    como último elemento hijo.

    <section id = (venta o alquiler)>
        <h2>Titulo</h2>
        *** inyectar aca <----- inyecto aca, como ultimo elemento hijo del contenedor principal.
    </section> 

    Por otra parte, si el valor es falso, es decir, contenedor.children [1] existe y por ende, esto en el index.html debo inyectar entr2 dos 
    elementos, recordar:
    <section id = (venta o alquiler)>
        <h2>Titulo</h2>
        *** inyectar aca <----- OJO. Debo inyectar antes del anchor.
        <a ref ver todas las propiedades> (boton negro)
    </section>

    Para inyectar antes del anchor uso del metodo insertBefore  o "inyectar antes" el cual inyectará el nodo (divRow) ANTES de una determinada 
    referencia (nodo). En este caso, dicha referencia o nodo es el elemento anchor, cuya referencia es contenedor.children[1]. recordar que 
    contenedor.children[0] es el titulo h2.
     
     */

    contenedor.children[1] === undefined ?  contenedor.append(divRow): contenedor.insertBefore(divRow,contenedor.children[1]);
      
}
