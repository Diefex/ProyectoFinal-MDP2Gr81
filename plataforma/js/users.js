var users = [
    {
        user: 'Diefex',
        email: 'diefex57@gmail.com',
        id: '000001',
        games: [1,2,4,6],
        max_score: 0,
        fav_game: 0,

        name: 'Diego Velez',
        age: 19,
        language: 'Español',
        location: 'Colombia'
    }
];

localStorage.setItem('users',JSON.stringify(users));
localStorage.setItem('user', JSON.stringify(users[0]));