const pixel_1 = document.getElementById("pixel_1");
const token_audio = new Audio("assets/audios/Token.wav");

const altavoz = document.getElementById("altavoz");
const stop = new Audio("assets/audios/Complete.wav")
stop.currentTime = 0.2;
stop.volume = 0.4;

function reproducir (cancion, alt) {
    if (cancion.paused) {
                cancion.play()
                alt.src = "assets/img/Sound.png";
                alt.classList.add("beat");
            } else {
                cancion.pause()
                stop.play()
                alt.src = "assets/img/mute.png";
                alt.classList.remove("beat")
            }
}

const rewind = document.getElementById("rewind");
const audio_rewind = new Audio("assets/audios/Rewind.wav")

if (rewind !== null) {
    rewind.addEventListener("click", function() {
        audio_rewind.currentTime = 1;
        audio_rewind.volume = 0.8;
        audio_rewind.play();

        const posicion_i = window.scrollY;
        const duracion = 2000;
        let t_i = null

        function subida (t_a) {
            if (t_i === null) {
                t_i = t_a
            }

            const t_trans = t_a - t_i;

            const progreso = Math.min(t_trans / duracion, 1);
            window.scrollTo(0, posicion_i * (1 - progreso));

            if (t_trans < duracion) {
                requestAnimationFrame(subida);
            }
        }
        requestAnimationFrame(subida)
    })
}

const mascaras = [
    ["Richard", "assets/img/RICHARD.png", "Sin efecto adicional. La máscara por defecto y un símbolo del juego."],
    ["Rasmus", "assets/img/Rasmus.webp", "Un ojo para los secretos. Hace que los objetos coleccionables e interactivos brillen en el mapa."],
    ["Tony", "assets/img/Tony.webp", "Puños letales. Los golpes cuerpo a cuerpo son mortales y las ejecuciones son mucho más rápidas."],
    ["Aubrey", "assets/img/Aubrey.webp", "Más armas. Aumenta significativamente la cantidad de armas de fuego que dejan caer los enemigos al morir."],
    ["Don Juan", "assets/img/Don_Juan.webp", "Puertas letales. Al golpear a los enemigos abriendo puertas, mueren al instante en lugar de solo quedar aturdidos."],
    ["Graham", "assets/img/Graham.webp", "Caminar rápido. Aumenta la velocidad de movimiento, ideal para esquivar disparos y hacer combos rápidos."],
    ["Dennis", "assets/img/Dennis.webp", "Empiezas con un cuchillo. Ideal para partidas sigilosas y ataques cuerpo a cuerpo desde el primer segundo."],
    ["George", "assets/img/George.webp", "Mira más lejos. Permite desplazar la cámara mucho más allá de lo normal para planear tu ruta."],
    ["Ted", "assets/img/Ted.webp", "Los perros no te atacan. Los perros guardianes te ignorarán por completo a menos que los ataques primero."],
    ["Rufus", "assets/img/Rufus.webp", "Sobrevives a una bala. Te otorga una 'vida extra' al resistir un disparo que normalmente sería letal."],
    ["Rami", "assets/img/Rami.webp", "Aumenta la capacidad máxima del cargador de las armas de fuego recogidas en un 33%."],
    ["Willem", "assets/img/Willem.webp", "Al presionar el botón de ejecución, robas el arma del enemigo mientras lo eliminas."],
    ["Peter", "assets/img/Peter.webp", "Disparos silenciosos. Las armas de fuego hacen mucho menos ruido, evitando alertar a todos los enemigos del piso."],
    ["Zack", "assets/img/Zack.webp", "Ventana de combo más larga. Te da más tiempo entre muertes para mantener tu racha y conseguir más puntos."],
    ["Oscar", "assets/img/Oscar.webp", "La visión del jugador se filtra a través de un filtro rojo oscuro que pulsa de rojo a negro."],
    ["Rick", "assets/img/Rick.webp", "Todas las armas de fuego serán letales de un solo disparo. Sin la máscara, los enemigos tienen una probabilidad aleatoria de sobrevivir hasta a dos balas."],
    ["Brandon", "assets/img/Brandon.webp", "Aumenta la velocidad de movimiento, incluso en mayor medida que la Máscara de Graham."],
    ["Charlie", "assets/img/Charlie.webp", "Hace que las armas que aparecen aleatoriamente siempre sean armas cuerpo a cuerpo en lugar de armas de fuego."],
    ["Louie", "assets/img/Louie.webp", "Difícil de detectar. Los enemigos tardan más tiempo en notarte, dándote unos valiosos segundos extra para actuar."],
    ["Phil", "assets/img/Phil.webp", "Hace que todos los diálogos del juego se traduzcan al francés."],
    ["Nigel", "assets/img/Nigel.webp", "Revierte las teclas de movimiento."],
    ["Earl", "assets/img/Earl.webp", "Aumenta los puntos de energía máximos de 1/2 a 3/4."],
    ["Jones", "assets/img/Jones.webp", "Hace que las muertes y ejecuciones sean más sangrientas generando más efectos de partículas de sangre y vísceras."],
    ["Carl", "assets/img/Carl.webp", "Empiezas con un taladro. Te otorga un arma cuerpo a cuerpo única y ejecuciones muy sangrientas."],
    ["Jake", "assets/img/Jake.webp", "Lanzamientos letales. Cualquier arma u objeto que arrojes matará a los enemigos al instante en lugar de aturdirlos."],
    ["Richter", "assets/img/Richter.webp", "Empiezas con una Uzi con silenciador. Fuego rápido y sigiloso desde el inicio del nivel."]
];

// faltan mascaras, ya estan todas

let indice = 0;

const mascara = document.getElementById("img_carrusel");
const mascara_nom = document.getElementById("mascara_nom")
const mascara_des = document.getElementById("mascara_des");

function carrusel(num) {
    indice += num;

    if (indice >= mascaras.length) {
        indice = 0;
    } else if (indice < 0) {
        indice = mascaras.length -1;
    }

    mascara.src = mascaras[indice][1];
    mascara_nom.innerText = mascaras[indice][0];
    mascara_des.innerText = mascaras[indice][2];
}

const logo = document.getElementById("logo");
const titulo_pag_2 = document.getElementById("titulo_pag_2");
const subtitulo_pag_2 = document.getElementById("subtitulo_pag_2");
const final_h2 = document.getElementById("final_h2");
const final_h3 = document.getElementById("final_h3");

window.addEventListener("scroll", function parallax() {
    let valor = window.scrollY;
    if (logo !== null) {
        logo.style.top = -valor * 0.3 + "px";
    }
    
    if (titulo_pag_2 !== null) {
        titulo_pag_2.style.top = -valor * 0.4 + "px";
        subtitulo_pag_2.style.top = -valor * 0.5 + "px";
    }

    if (final_h2 !== null) {
        final_h2.style.top = -valor * 0.4 + "px";
        final_h3.style.top = -valor * 0.5 + "px"; 
    }
})

function fondo(id) {
    switch (id) {
        case 1:
            let cancion_fondo_1 = document.getElementById("cancion_1");
            cancion_fondo_1.volume = 0.5;
            reproducir(cancion_fondo_1, altavoz);
            break
        case 2:
            let cancion_fondo_2 = document.getElementById("cancion_2");
            cancion_fondo_2.volume = 0.5;
            reproducir(cancion_fondo_2, altavoz);
            break
        case 3:
            let cancion_fondo_3 = document.getElementById("cancion_3");
            cancion_fondo_3.volume = 0.5;
            reproducir(cancion_fondo_3, altavoz);
            break
        case 4:
            let cancion_fondo_4 = document.getElementById("cancion_4");
            cancion_fondo_4.volume = 0.5;
            reproducir (cancion_fondo_4, altavoz);
            break
        default:
            console.log ("algo salio mal")
    }
}

const div = document.getElementById("div_mover");
const pixel_2 = document.getElementById("pixel_2");
const div_pixel_2 = document.getElementById("div_pixel_2");
const div_mascara = document.getElementById("mascara");
const pixel_3 = document.getElementById("pixel_3");
const div_pixel_3 = document.getElementById("div_pixel_3");
const pixel_4 = document.getElementById("pixel_4");
const div_pixel_4 = document.getElementById("div_pixel_4")

function mover (num) {

    switch (num) {
        case 1:
            div_pixel_2.style.display = "flex";
            div.classList.add("derecha");
            break
        case 2:
            div_pixel_3.style.display = "flex";
            div_mascara.classList.add("subir");
            mascara_nom.classList.add("bajar");
            mascara_des.classList.add("bajar");
            break
    }
    
}

let pixeles = 4

function pixels(num, pix) {
    pixeles = pixeles - num;
    if (pixeles <= 0) {
        alert ("los pixeles ya son cero")
    }

    switch (pix) {
        case 1:
            pixel_1.style.display = "none";
            token_audio.play();
            break
        case 2:
            pixel_2.style.display = "none";
            token_audio.play();
            div.classList.remove("derecha");
            break
        case 3:
            pixel_3.style.display = "none";
            token_audio.play()
            div_mascara.classList.remove("subir");
            mascara_nom.classList.remove("bajar");
            mascara_des.classList.remove("bajar");
        case 4:
            pixel_4.style.display = "none";
            token_audio.play()
            break
        default:
    }
}

const puerta_img = document.getElementById("puerta");
const boton_puerta = document.getElementById("puerta_boton");
const explosion = new Audio("assets/audios/BigExplosion.wav");
const aviso = document.getElementById("aviso");

function puerta() {
    puerta_img.src = "assets/img/door_burn.png";
    explosion.play();
    boton_puerta.classList.add("efecto_fuego");
    document.body.classList.add("sacudida_camara");
    document.body.classList.add("negro")
    aviso.innerText = "";
    setTimeout(() => {
        boton_puerta.classList.remove("efecto_fuego");
        document.body.classList.remove("sacudida_camara");
    }, 500);
}

let contador = 0

function activar (num) {
    contador = contador + num;
    if (contador == 1) {
        puerta();
    }
}

const botones_acordeon = document.querySelectorAll(".boton_acordeon");

botones_acordeon.forEach(boton => {
    boton.addEventListener("click", function() {
        this.classList.toggle("activo");

        let contenido = this.nextElementSibling;

        if (contenido.style.maxHeight) {
            contenido.style.maxHeight = null;
        } else {
            contenido.style.maxHeight = contenido.scrollHeight + "px";
        }
    });
});

const botonForm = document.getElementById("boton_form");
const contenedorOpiniones = document.getElementById("contenedor_opiniones");

const API_URL = "http://localhost:3000/api/opiniones";

async function cargarOpiniones() {
    try {
        const respuesta = await fetch(API_URL);
        const opiniones = await respuesta.json();
        
        contenedorOpiniones.innerHTML = '<h3 id="subtitulo_3">OPINIONES DE LA COMUNIDAD</h3>';
        
        opiniones.forEach(item => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta_opinion");
            
            tarjeta.innerHTML = `
                <h4>${item.nombre} <span>[${item.genero}]</span></h4>
                <p class="correo_comunidad">${item.email}</p>
                <p class="texto_opinion">"${item.opinion}"</p>
            `;
            contenedorOpiniones.appendChild(tarjeta);
        });
    } catch (error) {
        console.error("Error al cargar opiniones:", error);
    }
}

cargarOpiniones();

if (botonForm) {
    botonForm.addEventListener("click", async (e) => {
        e.preventDefault();
        
        const nombreInput = document.getElementById("nombre").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const generoInput = document.getElementById("genero").value;
        const opinionInput = document.getElementById("opinion").value.trim();

        if (nombreInput === "" || emailInput === "" || opinionInput === "") {
            alert("Completa todos los campos");
            return;
        }
        const nuevaOpinion = {
            nombre: nombreInput,
            email: emailInput,
            genero: generoInput,
            opinion: opinionInput
        };

        try {
            await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevaOpinion)
            });
            cargarOpiniones();
            document.getElementById("formulario").reset();
            
        } catch (error) {
            console.error("Error al guardar la opinión:", error);
            alert("Hubo un error al conectar con la base de datos.");
        }
    });
}