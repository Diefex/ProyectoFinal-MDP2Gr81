$(document).ready(init);

function init(){

    // Construir Inicio Rapido
    fast = "";
    for(let i=0; i<2; i++){
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
    for(let i=0; i<10; i++){
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