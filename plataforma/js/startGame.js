function startGame(id){
    game = JSON.parse(localStorage.getItem('games'))[id];
    user = JSON.parse(localStorage.getItem('user'));
    user.fav_game = game.name;
    user.last_game[1] = user.last_game[0];
    user.last_game[0] = id;
    localStorage.setItem('user', JSON.stringify(user));
    window.open('../'+game.name+'/index.html');
}