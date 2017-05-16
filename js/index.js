$(document).ready(function() {
    function thing() {
        let random = num => Math.ceil((Math.random() * num) -1);
        //
        // var rand = Math.ceil(Math.random() * 360);

        $.getJSON("https://pokeapi.co/api/v2/pokemon/" + random(360)).then(function(data) {
            let sprite = data.sprites.front_default;
            let back = data.sprites.back_default;
            let quote = data.species.name;
            let name = data.species.name;
            let r = random(3);

          function getQuote(){
            $.getJSON("https://api.mlab.com/api/1/databases/jackhandeyapi/collections/quotes?apiKey=gViXTt2ltpcF0a-Ot-Glb5w577mRXb0p").then(function(data){
              let dataStr = data[0].jackhandey
              let length = dataStr.length;
              let quote = dataStr[Math.floor(Math.random()*length)].quote;
              return quote;
            });
          }

            function randomQuote() {
                let r = Math.floor(Math.random() * 4);
                let bigSlice = name.slice(0, r + 2);
                let backSlice = name.slice(2);
                let frontSlice = name.slice(-r + 2);
                let randQuote = [String(backSlice), String(frontSlice), String(bigSlice), ""];
                return randQuote[r];
            }
            let punk = ["!", "?", "!?", "!!!", "."];
            let quoteQuote = `"${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()}${punk[r]}"`;

            let fullQuote = quoteQuote.toUpperCase();
            let titleName = name[0].toUpperCase() + name.slice(1);
            $("#loader").css('display','none');

            $(".quote").empty();
            $(".quote").append(`<i>${fullQuote}</i><p>`);
            $(".quote").append(`- <a href="http://www.pokemon.com/us/pokedex/${name}">${titleName}`);
            $("#zoom").empty().append(`<img class="img-responsive center-block greyscale" src="${sprite}"></a>`);
            $("#img").empty().append(`<img class="img-responsive hvr-buzz-out hvr-float-shadow"src="${sprite}"></a>`);
            $("#point").css('display','block');
            $("#img").one("click", function() {
              $.getJSON("https://api.mlab.com/api/1/databases/jackhandeyapi/collections/quotes?apiKey=gViXTt2ltpcF0a-Ot-Glb5w577mRXb0p").then(function(data){
                let dataStr = data[0].jackhandey
                let length = dataStr.length;
                let quote = dataStr[Math.floor(Math.random()*length)].quote.slice(0,-2);

                $(".quote").empty();
                $(".quote").append(`"${quote}"`);
                $(".quote").append(`<p>- <a href="http://www.pokemon.com/us/pokedex/${name}"class="less">${titleName}</p>`);
              });

            });
        });
    };
    thing();

    $("button").on("click", function() {
        $("#point").css('display','none');
        $("#loader").css('display','block');
        $(".quote").empty();
        thing();
    });
});
