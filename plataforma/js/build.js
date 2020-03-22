//$(document).ready(init("Biblioteca"));

function init(section) {

    // construir Navbar
    document.getElementById("body").innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: black; max-height: 100px;">
        <a class="navbar-brand" href="#"> <img src="../imgs/MPD2G.png" alt="" height="100rem"> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item `+ (section == "Tienda" ? "active" : "") + `">
                    <a class="nav-link" href="`+ (section == "Tienda" ? "#" : "tienda.html") + `">Tienda <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item `+ (section == "Biblioteca" ? "active" : "") + `">
                    <a class="nav-link" href="`+ (section == "Biblioteca" ? "#" : "biblioteca.html") + `">Biblioteca</a>
                </li>
                <li class="nav-item `+ (section == "Perfil" ? "active" : "") + `">
                    <a class="nav-link" href="`+ (section == "Perfil" ? "#" : "perfil.html") + `">Perfil</a>
                </li>
            </ul>
            <button class="btn btn-outline-light mx-1">Ingresar</button>
            <button class="btn btn-outline-light mx-1">Registrarse</button>
        </div>
    </nav>`;

    // construir contenido
    document.getElementById("body").innerHTML += `<div class="container-fluid my-2 p-md-5" id="contenido"></div>`;
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
        if (i == 0) {
            indicators += `<li data-target="#carouselExampleIndicators" data-slide-to="` + i + `" class="active"></li>`
            suggest += `<div class="carousel-item active">`;
        } else {
            indicators += `<li data-target="#carouselExampleIndicators" data-slide-to="` + i + `"></li>`
            suggest += `<div class="carousel-item">`
        }
        suggest += `
            <div class="row vh-25">
                <div class="col">
                    <img src="https://picsum.photos/1000/500" class="d-block w-100" alt="...">
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
                <img src="https://picsum.photos/500/255" alt="">
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
                <img src="https://picsum.photos/1000/300" class="card-img" alt="...">
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
                        <img src="https://picsum.photos/100" alt="" class="d-block h-100">
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