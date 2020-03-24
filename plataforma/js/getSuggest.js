function getSuggest(user){
    games = JSON.parse(localStorage.getItem('games'));
    lastGame = games[user.last_game[0]];
    tag = lastGame.tags.split(',')[0];
    ids = [];
    for (let i = 0; i < games.length; i++) {
        if(games[i].tags.split(',')[0] == tag) {ids[ids.length] = i; console.log(tag+" "+games[i].tags.split(',')[0])}
    }
    return ids;
}