$(document).ready(init);

function init(){

    // construir sugerencias
    suggest = "";
    indicators = "";
    for (let i = 0; i < 5; i++) {
        if(i==0){
            indicators += `<li data-target="#carouselExampleIndicators" data-slide-to="`+i+`" class="active"></li>`
            suggest += `<div class="carousel-item active">`;
        } else {
            indicators += `<li data-target="#carouselExampleIndicators" data-slide-to="`+i+`"></li>`
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
    document.getElementById("catalog").innerHTML=catalog;
}