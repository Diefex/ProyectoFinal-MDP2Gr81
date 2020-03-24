if(localStorage.getItem('users') == null){
    var users = [
        {
            user: 'Alejandrosd',
            pass: '4321',
            email: 'luisocampo.o.g@gmail.com',
            id: '000002',
            games: [0,1,2],
            max_score: 0,
            fav_game: 0,

            name: 'Alejandro Ocampo',
            age: 19,
            language: 'Español',
            location: 'España'
        },
        {
            user: 'Diefex',
            pass: '1234',
            email: 'diefex57@gmail.com',
            id: '000001',
            games: [1, 2, 4, 6],
            max_score: 0,
            fav_game: 0,

            name: 'Diego Velez',
            age: 19,
            language: 'English',
            location: 'Colombia'
        },
        {
            user: 'OscarGutierrez312',
            pass: '1111',
            email: 'oscargutierrez1102@gmail.com',
            id: '000003',
            games: [0,1,2,3,4,6,7],
            max_score: 0,
            fav_game: 0,

            name: 'Oscar Gutierrez',
            age: 20,
            language: 'Español',
            location: 'Colombia'
        }
    ];
} else {
    var users = JSON.parse(localStorage.getItem('users'));
}

localStorage.setItem('users', JSON.stringify(users));

var login = document.getElementById('login');

login.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(login);
    for (let i = 0; i < users.length; i++) {
        if (users[i].user == data.get('user') && users[i].pass == data.get('pass')) {
            localStorage.setItem('user', JSON.stringify(users[i]));
            createGames();
            console.log("correcto");
            setTimeout("ingresar()", 500);
            return;
        }
    }
    console.log("Usuario Invalido");
    localStorage.clear();
})

function ingresar(){
    location = "tienda.html";
}