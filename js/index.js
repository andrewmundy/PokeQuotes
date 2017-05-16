$(document).ready(function() {
    function thing() {
        var rand = Math.ceil(Math.random() * 360);

        $.getJSON("https://pokeapi.co/api/v2/pokemon/" + rand).then(function(data) {
            var sprite = data.sprites.front_default;
            var back = data.sprites.back_default;
            var quote = data.species.name;
            var name = data.species.name;
            var r = Math.floor(Math.random() * 3);

          function getQuote(){
            $.getJSON("https://api.mlab.com/api/1/databases/jackhandeyapi/collections/quotes?apiKey=gViXTt2ltpcF0a-Ot-Glb5w577mRXb0p").then(function(data){
              var dataStr = data[0].jackhandey
              var length = dataStr.length;
              var quote = dataStr[Math.floor(Math.random()*length)].quote;
              return quote;
            });
          }

            function randomQuote() {
                var r = Math.floor(Math.random() * 4);
                var bigSlice = name.slice(0, r + 2);
                var backSlice = name.slice(2);
                var frontSlice = name.slice(-r + 2);
                var randQuote = [String(backSlice), String(frontSlice), String(bigSlice), ""];
                return randQuote[r];
            }
            var punk = ["!", "?", "!?", "!!!", "."];
            var quoteQuote = `"${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()}${punk[r]}"`;

            var fullQuote = quoteQuote.toUpperCase();
            var titleName = name[0].toUpperCase() + name.slice(1);
            $(".message").empty().append(`<i>${fullQuote}</i><p>`);
            $(".message").append(`- <a href="http://www.pokemon.com/us/pokedex/${name}">${titleName}`);
            $("#zoom").empty().append(`<img class="img-responsive center-block greyscale" src="${sprite}"></a>`);
            $("#img").empty().append(`<img class="img-responsive hvr-buzz-out hvr-float-shadow"src="${sprite}"></a>`);

            $("#img").one("click", function() {
              $.getJSON("https://api.mlab.com/api/1/databases/jackhandeyapi/collections/quotes?apiKey=gViXTt2ltpcF0a-Ot-Glb5w577mRXb0p").then(function(data){
                var dataStr = data[0].jackhandey
                var length = dataStr.length;
                var quote = dataStr[Math.floor(Math.random()*length)].quote.slice(0,-2);

                $(".message").empty().append(`"${quote}"`);
                $(".message").append(`<p>- <a href="http://www.pokemon.com/us/pokedex/${name}"class="less">${titleName}</p>`);
              });

            });
        });
    };
    thing();

    $("button").on("click", function() {
    $(".message").empty().append(`<div class="loader img-fluid"></div>`);
        thing();
    });
});
