function init(section) {

    // construir Navbar
    document.getElementById("body").innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: black; max-height: 100px;">
        <a class="navbar-brand" href="../index.html"> <img src="../imgs/MPD2G.png" alt="" height="100rem"> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item `+ (section == "Tienda" ? "active" : "") + `">
                    <a class="nav-link" href="`+ (section == "Tienda" ? "#" : "tienda.html") + `">Tienda` + (section == "Tienda" ? '<span class="sr-only">(current)</span>' : "") + `</a>
                </li>
                <li class="nav-item `+ (section == "Biblioteca" ? "active" : "") + `">
                    <a class="nav-link" href="`+ (section == "Biblioteca" ? "#" : "biblioteca.html") + `">Biblioteca` + (section == "Biblioteca" ? '<span class="sr-only">(current)</span>' : "") + `</a>
                </li>
                <li class="nav-item `+ (section == "Perfil" ? "active" : "") + `">
                    <a class="nav-link" href="`+ (section == "Perfil" ? "#" : "perfil.html") + `">Perfil` + (section == "Perfil" ? '<span class="sr-only">(current)</span>' : "") + `</a>
                </li>
            </ul>
            <button class="btn btn-outline-light mx-1">Ingresar</button>
            <button class="btn btn-outline-light mx-1">Registrarse</button>
        </div>
    </nav>`;

    // construir contenido

    switch (section) {
        case "Tienda":
            initStore();
            break;

        case "Biblioteca":
            initLibrary();
            break;

        case "Perfil":
            initProfile();
            break;

        case "Juego":
            initGame();
            break;

        default:
            initStore();
    }

    // construir footer
    document.getElementById("body").innerHTML += `
    <!-- Footer -->
    <footer class="text-muted" id="footer">
        <div class="container">
            <p>Por: Diego Velez</p>
        </div>
    </footer>`;
}

function initStore() {
    document.getElementById("body").innerHTML += `<div class="container-fluid my-2 p-md-5" id="contenido"></div>`;
    document.getElementById("contenido").innerHTML = `
    <!-- Contenido -->
    <div class="container-fluid my-2 p-md-5" id="contenido">

        <!-- Buscador -->
        <div class="container">
            <input class="form-control mx-sm-2 text-light bg-dark" type="search" placeholder="Busca juegos en la tienda"
                aria-label="Search">
        </div>

        <!-- Sugerencias -->
        <div class="container my-5">
            <div class="container m-1">
                <h3>Sugerencias para ti</h3>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators" id="indicators"></ol>
                <div class="carousel-inner" id="suggest"></div>
            </div>
        </div>

        <!-- Catalogo -->
        <div class="container my5">
            <div class="container m-1">
                <h3>Catálogo</h3>
            </div>
            <div class="album py-2">
                <div class="container">
                    <div class="row" id="catalog"></div>
                </div>
            </div>
        </div>

    </div>`;

    // construir sugerencias
    suggest = "";
    indicators = "";
    for (let i = 0; i < 5; i++) {
        indicators += `<li data-target="#carouselExampleIndicators" data-slide-to="` + i + `" ` + (i == 0 ? 'class="active"' : "") + `></li>`
        suggest += `
        <div class="carousel-item `+ (i == 0 ? "active" : "") + `">
            <div class="row vh-25">
                <div class="col">
                    <img src="https://picsum.photos/100`+i+`/500" class="d-block w-100" alt="...">
                </div>
                <div class="col-md-4 text-light bg-dark container">
                    <div class="container p-3">
                        <div class="title">Game Name</div>
                        <div> Descripcion, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                            illo perferendis! Eveniet quibusdam hic veritatis quos impedit obcaecati
                            minima labore doloribus nostrum temporibus harum, dolorum repudiandae facere
                            dicta, perferendis optio. </div>

                        <div class="row justify-content-between">
                            <div class="price m-2">$1000 COL</div> <button
                                class="btn btn-outline-light m-3">Ver&rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("suggest").innerHTML = suggest;
    document.getElementById("indicators").innerHTML = indicators;

    // construir catalogo
    catalog = "";
    for (let i = 0; i < 10; i++) {
        catalog += `
        <div class="col-md-4">
            <div class="card mb-4 bg-dark">
                <img src="https://picsum.photos/50`+i+`/255" alt="">
                <div class="card-body">
                    <div class="title">Game Name</div>
                    <p class="card-text">This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="price">$1000 COL</div>
                        <button class="btn btn-outline-light">Ver&rarr;</button>
                    </div>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("catalog").innerHTML = catalog;
}

function initLibrary() {
    document.getElementById("body").innerHTML += `<div class="container-fluid my-2 p-md-5" id="contenido"></div>`;
    document.getElementById("contenido").innerHTML = `
    <!-- Inicio Rapido -->
        <div class="container mb-5">
            <div class="container m-1">
                <h3>Inicio Rápido</h3>
            </div>
            <div class="row justify-content-between" id="fast">
                
                <div class="col">
                    <div class="card bg-dark text-white">
                        <img src="https://picsum.photos/1000/300" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title">Titulo</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p class="card-text">última vez: 01 ene 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Buscador -->
        <div class="container my-5">
            <input class="form-control mx-sm-2 text-light bg-dark" type="search"
                placeholder="Busca juegos en tu biblioteca" aria-label="Search">
        </div>

        <!-- Biblioteca -->
        <div class="container my-5">
            <div class="container m-1">
                <h3>Biblioteca</h3>
            </div>
            <div class="album py-2">
                <div class="container" id="library"></div>
            </div>
        </div>`;

    // Construir Inicio Rapido
    fast = "";
    for (let i = 0; i < 2; i++) {
        fast += `
        <div class="col">
            <div class="card bg-dark text-white">
                <img src="https://picsum.photos/100`+i+`/300" class="card-img" alt="...">
                <div class="card-img-overlay">
                    <h3 class="card-title">Game Name</h3>
                    <p class="card-text text-muted">última vez: 01 ene 2020</p>
                    <button class="btn btn-light">Iniciar&rarr;</button>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("fast").innerHTML = fast;

    // Construir biblioteca
    library = "";
    for (let i = 0; i < 10; i++) {
        library += `
        <div class="row">
            <div class="card bg-dark w-100 mb-3">
                <div class="row">
                    <div class="col-2">
                        <img src="https://picsum.photos/10`+i+`" alt="" class="d-block h-100">
                    </div>
                    <div class="col">
                        <div class="card-body p-5">
                            <div class="row justify-content-between">
                                <div>
                                    <h3 class="card-title">Game Name</h3>
                                    <p class="text-muted">Horas Jugadas: 0h 0min</p>
                                </div>
                                <div class="btn-group" role="group">
                                    <button class="btn btn-sm btn-outline-light">&larr;ir a la
                                        tienda</button>
                                    <button class="btn btn-lg btn-outline-light">Jugar&rarr;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("library").innerHTML = library;

}

function initProfile(){
    document.getElementById("body").innerHTML += `    
    <div class="container my-2 p-md-5" id="contenido">
        <!-- Informacion de la Cuenta -->
        <div class="card bg-dark my-5 info">
            <div class="card-body p-md-5">
                <h1 class="card-title"> Información de la Cuenta </h1>
                <div class="card-text px-md-5">
                    <div class="row">
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Usuario: </strong> Diefex </div>
                            <div class="row justify-content-between"> <strong>E-mail: </strong> diefex57@gmail.com </div>
                            <div class="row justify-content-between"> <strong>ID: </strong> 00000001 </div>
                        </div>
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Juegos en Propiedad: </strong> 10 </div>
                            <div class="row justify-content-between"> <strong>Máximo Puntaje: </strong> 0000 </div>
                            <div class="row justify-content-between"> <strong>Juego más Jugado: </strong> Ningúno </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Informacion Personal -->
        <div class="card bg-dark my-5 info">
            <div class="card-body p-md-5">
                <h1 class="card-title"> Información Personal </h1>
                <div class="card-text px-md-5">
                    <div class="row">
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Nombre: </strong> Diego Velez </div>
                            <div class="row justify-content-between"> <strong>Edad: </strong> 19 </div>
                        </div>
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Lenguage Preferido: </strong> Español </div>
                            <div class="row justify-content-between"> <strong>País: </strong> Colombia </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

function initGame() {
    document.getElementById("body").innerHTML += `<div class="container-fluid p-0" id="contenido"></div>`;
    document.getElementById("contenido").innerHTML = `
    <!-- Capturas -->
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" id="screenshots"></div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <!-- Informacion -->
    <div class="container my-5">
        <h1 class="display-3">Game Name</h1>
        <div class="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit perferendis quasi ratione
            quam, odio neque voluptate itaque, vitae libero assumenda quae quisquam mollitia quaerat perspiciatis
            pariatur sed doloremque eius!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolores possimus praesentium
            expedita itaque quo blanditiis voluptate quidem labore totam deserunt omnis eligendi in quaerat
            voluptatem nobis animi natus quis?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus provident aperiam, eaque maiores
            vitae deleniti officia reprehenderit a amet, illo sequi possimus fugit quam, aliquam rerum quidem
            consequuntur. Facilis, laudantium.
        </div>
        <h3 class="py-3">
            $ 1.000 COL
        </h3>
        <button class="btn btn-outline-light btn-lg mb-5">Obtener&rarr;</button>

        <!-- Acerca -->
        <div class="my-5">
            <h4 class="my-3">Acerca del Juego:</h4>
            <div class="row">
                <div class="col"> <strong>Desarrollador: </strong><br> nombre </div>
                <div class="col"> <strong>Etiquetas: </strong><br> etiqueta1, etiqueta2 </div>
                <div class="col"> <strong>Fecha de Lanzamiento: </strong><br> 01/ene/2020 </div>
                <div class="col"> <strong>Reseñas: </strong><br> positivas </div>
            </div>
        </div>

        <!-- Calificaciones -->
        <div class="my-5">
            <h4 class="my-3">Calificaciones:</h4>
            <div class="row" id="ratings"></div>
        </div>

        <!-- Requisitos -->
        <div class="my-5">
            <h4 class="my-3">Requisitos:</h4>
            <div class="row">
                <div class="col bg-dark mx-3 p-5">
                    <h5 class="mb-4">Mínimos:</h5>
                    <div class="row justify-content-between"> <strong>Sistema Operativo: </strong> Windows 7/8/10 (64/32 Bits) </div>
                    <div class="row justify-content-between"> <strong>Procesador: </strong> AMD E2 6110 o equivalente </div>
                    <div class="row justify-content-between"> <strong>RAM: </strong> 4 GB Usables </div>
                    <div class="row justify-content-between"> <strong>Gráficos: </strong> Radeon R2 </div>
                    <div class="row justify-content-between"> <strong>Almacenamiento: </strong> 500 MB disponibles </div>
                </div>
                <div class="col bg-dark mx-3 p-5">
                    <h5 class="mb-4">Recomendados:</h5>
                    <div class="row justify-content-between"> <strong>Sistema Operativo: </strong> Windows 10 (64 Bits) </div>
                    <div class="row justify-content-between"> <strong>Procesador: </strong> Intel Core i5 a 3,4 GHz o equivalente </div>
                    <div class="row justify-content-between"> <strong>RAM: </strong> 8 GB Usables </div>
                    <div class="row justify-content-between"> <strong>Gráficos: </strong> GeForce GTX 660 (2048 MB) / Radeon HD 7970 </div>
                    <div class="row justify-content-between"> <strong>Almacenamiento: </strong> 500 MB disponibles </div>
                </div>
            </div>
        </div>
    </div>`;

    // construir capturas
    screenshots = "";
    for (let i = 0; i < 5; i++) {
        screenshots += `
        <div class="carousel-item `+ (i == 0 ? "active" : "") + `">
            <img src="https://picsum.photos/160`+ i + `/400" class="d-block w-100" alt="https://picsum.photos/1600/400">
        </div>`;
    }
    document.getElementById("screenshots").innerHTML = screenshots;

    ratings = "";
    for (let i = 0; i < 3; i++) {
        ratings += `
        <div class="col"> 
            <div class="card bg-dark">
                <div class="card-body">
                    <h5 class="card-title">Nombre</h5>
                    <h6 class="card-subtitle mb-2 text-muted">01 ene 2020</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h4>10/10</h4>
                </div>
            </div> 
        </div>`;
    }
    document.getElementById("ratings").innerHTML = ratings;
}