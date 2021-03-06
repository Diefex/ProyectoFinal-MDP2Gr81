function init(section) {

    // construir Navbar
    document.getElementById("body").innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: black; max-height: 100px;">
        <a class="navbar-brand" href="index.html"> <img src="imgs/MPD2G.png" alt="" height="100rem"> </a>
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
            </ul>
            <a class="text-light" href="perfil.html"><h1 class="airmill-o">`+JSON.parse(localStorage.getItem('user')).user+`</h1></a>
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
        <div class="container text-center">
            <p>© MDP2Games - 2020</p>
        </div>
    </footer>`;
}

function initStore() {
    document.getElementById("body").innerHTML += `<div class="container-fluid my-2 p-md-5" id="contenido"></div>`;
    document.getElementById("contenido").innerHTML = `
    <!-- Contenido -->
    <div class="container-fluid my-2 p-md-5" id="contenido">

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
    user = JSON.parse(localStorage.getItem('user'));
    games = JSON.parse(localStorage.getItem('games'));
    idsSug = getSuggest(user);
    suggest = "";
    indicators = "";
    i = 0;
    idsSug.forEach(id => {
        indicators += `<li data-target="#carouselExampleIndicators" data-slide-to="` + i + `" ` + (i == 0 ? 'class="active"' : "") + `></li>`
        suggest += `
        <div class="carousel-item `+ (i == 0 ? "active" : "") + `">
            <div class="row vh-25">
                <div class="col">
                    <img src="../`+games[id].name+`/capturas/1000x300.png" class="d-block w-100" alt="...">
                </div>
                <div class="col-md-4 text-light bg-dark container" style="min-height: 40vh">
                    <div class="container p-3">
                        <div class="title airmill">`+games[id].name+`</div>
                        <div>`+games[id].description+`</div>

                        <div class="row justify-content-between p-5">
                            <div class="price m-2">$`+games[id].price+` COL</div> 
                            <a href="juego.html"><button onclick="setGame(`+id+`)" class="btn btn-outline-light">Ver&rarr;</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        i++;
    });
    document.getElementById("suggest").innerHTML = suggest;
    document.getElementById("indicators").innerHTML = indicators;

    // construir catalogo
    
    catalog = "";
    i = 0;
    games.forEach(game => {
        catalog += `
        <div class="col-md-4 py-3">
            <div class="card mb-4 bg-dark h-100">
                <img src="../`+game.name+`/Capturas/255x255.png" alt="">
                <div class="card-body">
                    <div class="title airmill">`+game.name+`</div>
                    <p class="card-text">`+game.description+`</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <div class="price">$`+game.price+` COL</div>
                        <a href="juego.html"><button onclick="setGame(`+i+`)" class="btn btn-outline-light">Ver&rarr;</button></a>
                    </div>
                </div>
            </div>
        </div>`;
        i++;
    });
    document.getElementById("catalog").innerHTML = catalog;
}

function initLibrary() {
    user = JSON.parse(localStorage.getItem('user'));

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
        gameName = JSON.parse(localStorage.getItem('games'))[user.last_game[i]].name;
        fast += `
        <div class="col">
            <div class="card bg-dark text-white">
                <img src="../`+gameName+`/capturas/1000x300.png" class="card-img" alt="...">
                <div class="card-img-overlay">
                    <h2 class="card-title airmill">`+gameName+`</h2>
                    <button onclick="startGame(`+user.last_game[i]+`)" class="btn btn-light">Iniciar&rarr;</button>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("fast").innerHTML = fast;

    // Construir biblioteca
    library = "";
    user.games.forEach(gameID => {
        game = JSON.parse(localStorage.getItem('games'))[gameID];
        library += `
        <div class="row">
            <div class="card bg-dark w-100 mb-3">
                <div class="row">
                    <div class="col-2">
                        <img src="../`+game.name+`/capturas/100x100.png" alt="" class="d-block h-100">
                    </div>
                    <div class="col">
                        <div class="card-body p-5">
                            <div class="row justify-content-between">
                                <div>
                                    <h2 class="card-title airmill">`+game.name+`</h2>
                                </div>
                                <div>
                                    <a href="juego.html"><button onclick="setGame(`+gameID+`)" class="btn btn-sm btn-outline-light">&larr;ir a la tienda</button></a>
                                    <button onclick="startGame(`+gameID+`)" class="btn btn-lg btn-outline-light">Jugar&rarr;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });
    document.getElementById("library").innerHTML = library;
}

function initProfile(){
    user = JSON.parse(localStorage.getItem('user'));
    document.getElementById("body").innerHTML += `    
    <div class="container my-2 p-md-5" id="contenido">
        <!-- Informacion de la Cuenta -->
        <div class="card bg-dark my-5 info">
            <div class="card-body p-md-5">
                <h1 class="card-title"> Información de la Cuenta </h1>
                <div class="card-text px-md-5">
                    <div class="row">
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Usuario: </strong> `+user.user+` </div>
                            <div class="row justify-content-between"> <strong>E-mail: </strong> `+user.email+` </div>
                            <div class="row justify-content-between"> <strong>ID: </strong> `+user.id+` </div>
                        </div>
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Juegos en Propiedad: </strong> `+user.games.length+` </div>
                            <div class="row justify-content-between"> <strong>Ultimo juego jugado: </strong> `+user.fav_game+` </div>
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
                            <div class="row justify-content-between"> <strong>Nombre: </strong> `+user.name+` </div>
                            <div class="row justify-content-between"> <strong>Edad: </strong> `+user.age+` </div>
                        </div>
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Lenguage Preferido: </strong> `+user.language+` </div>
                            <div class="row justify-content-between"> <strong>País: </strong> `+user.location+` </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

function initGame() {
    game = JSON.parse(localStorage.getItem('game'));
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
        <h1 class="display-3 airmill">`+game.name+`</h1>
        <div class="text-justify">
            `+game.description+`
        </div>
        <h3 class="py-3">
            $ `+game.price+` COL
        </h3>
        <div class="btn-group mb-5" role="group">
            <a href="tienda.html" class="btn btn-outline-light btn-lg">&larr;Volver a la Tienda</a>
            <a href="biblioteca.html"><button onclick="getGame('`+game.name+`')" class="btn btn-outline-light btn-lg">Obtener&rarr;</button></a>
        </div>

        <!-- Acerca -->
        <div class="my-5">
            <h4 class="my-3">Acerca del Juego:</h4>
            <div class="row">
                <div class="col"> <strong>Desarrollador: </strong><br> `+game.developer+` </div>
                <div class="col"> <strong>Etiquetas: </strong><br> `+game.tags+` </div>
                <div class="col"> <strong>Fecha de Lanzamiento: </strong><br> `+game.date+` </div>
                <div class="col"> <strong>Reseñas: </strong><br> positivas </div>
            </div>
        </div>

        <!-- Requisitos -->
        <div class="my-5">
            <h4 class="my-3">Requisitos:</h4>
            <div class="row">
                <div class="col bg-dark mx-3 p-5">
                    <h5 class="mb-4">Mínimos:</h5>
                    <div class="row justify-content-between"> <strong>Sistema Operativo: </strong> `+game.OS_min+` </div>
                    <div class="row justify-content-between"> <strong>Procesador: </strong> `+game.pro_min+` o equivalente </div>
                    <div class="row justify-content-between"> <strong>RAM: </strong> `+game.ram_min+` usables </div>
                    <div class="row justify-content-between"> <strong>Gráficos: </strong> `+game.gra_min+` o equivalente </div>
                    <div class="row justify-content-between"> <strong>Almacenamiento: </strong> `+game.sto_min+` disponibles </div>
                </div>
                <div class="col bg-dark mx-3 p-5">
                    <h5 class="mb-4">Recomendados:</h5>
                    <div class="row justify-content-between"> <strong>Sistema Operativo: </strong> `+game.OS_rec+` </div>
                    <div class="row justify-content-between"> <strong>Procesador: </strong> `+game.pro_rec+` o equivalente </div>
                    <div class="row justify-content-between"> <strong>RAM: </strong> `+game.ram_rec+` usables </div>
                    <div class="row justify-content-between"> <strong>Gráficos: </strong> `+game.gra_rec+` o equivalente </div>
                    <div class="row justify-content-between"> <strong>Almacenamiento: </strong> `+game.sto_rec+` disponibles </div>
                </div>
            </div>
        </div>
    </div>`;

    // construir capturas
    screenshots = "";
    for (let i = 0; i < 3; i++) {
        screenshots += `
        <div class="carousel-item `+ (i == 0 ? "active" : "") + `">
            <img src="../`+game.name+`/capturas/1600x400_`+(i+1)+`.png" class="d-block w-100" alt="">
        </div>`;
    }
    document.getElementById("screenshots").innerHTML = screenshots;

}

function setGame(i){
    localStorage.setItem('game',JSON.stringify(JSON.parse(localStorage.getItem('games'))[i]));
}