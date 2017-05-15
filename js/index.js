$(document).ready(function() {
    function thing() {
        var rand = Math.ceil(Math.random() * 360);
        $.getJSON("https://pokeapi.co/api/v2/pokemon/" + rand).then(function(data) {
            var sprite = data.sprites.front_default;
            var back = data.sprites.back_default;
            var quote = data.species.name;
            var name = data.species.name;
            var r = Math.floor(Math.random() * 3);
            var message = [
                "What is even my existance?",
                "The best revenge is massive success",
                "Pika pika piiiiiiiiii",
                "Stop stuffing me in balls",
                "Strive not to be a success, but rather to be of value",
                " I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed",
                "Life is what happens to you while you’re busy making other plans",
                "An unexamined life is not worth living",
                "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily",
                "Every strike brings me closer to the next home run? Why are you making me say this",
                "They turned my research turtles into soup",
                "Wolodarsky, go get the keys to that fishing boat, and throw them in the water. No, wait. They might have another set. Just blow it up",
                "Who the shit is Kingsley Zissou",
                " I'm going to find it and I'm going to destroy it. I don't know how yet. Possibly with dynamite",
                "I am plagued by mosquitoes. Two have just bitten me on the neck, quite close together, one on each side",
                "WHAT IS THIS?! A SCHOOL FOR ANTS?!",
                "Joey, have you ever been in a... in a Turkish prison?",
                "You ever seen a grown man naked",
                "If you ever drop your keys into a river of molten lava, let'em go...because man, they're gone",
                "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes",
                "The quickest way to double your money is to fold it over and put it back in your pocket",
                "Dad always thought laughter was the best medicine, which I guess is why several of us died of tuberculosis",
                "Instead of a trap door, what about a trap window?  The guy looks out it, and if he leans too far, he falls out.  Wait.  I guess that's like a regular window",
                "If you're in a boxing match, try not to let the other guy's glove touch your lips, because you don't know where that glove has been",
                "If God dwells inside us, like some people say, I sure hope He likes enchiladas, because that's what He's getting",
                "People laugh when I say that I think a jellyfish is one of the most beautiful things in the world.  What they don't understand is, I mean a jellyfish with long, blond hair",
                "I'd rather be rich than stupid",
                "If you want to sue somebody, just get a little plastic skeleton and lay it in their yard.  Then tell them their ants ate your baby",
                "It takes a big man to cry, but it takes a bigger man to laugh at that man",
                "When you go ice-skating, try not to swing your arms too much, because that really annoys me",
                "I think a new, different kind of bowling should be carpet bowling It's just like regular bowling, only the lanes are carpet instead of wood I don't know why we should do this, but my gosh, we've got to try something!",
                "In weightlifting, I don't think sudden, uncontrolled urination should automatically disqualify you",
                "Do you know what happens when you slice a golf ball in half? Someone gets mad at you I found this out the hard way",
                "Some folks say it was a miracle St Francis suddenly appeared and knocked the next pitch clean over the fence Other folks say it was just a lucky swing",
                "If you're in a boxing match, try not to let the other guy's glove touch your lips, because you don't know where that glove has been",
                "I hope that after I die, people will say of me: That guy sure owed me a lot of money",
                "It's easy to sit there and say you'd like to have more money And I guess that's what I like about it It's easy Just sitting there, rocking back and forth, wanting that money",
                "Whenever someone asks me to define love, I usually think for a minute, then I spin around and pin the guy's arm behind his back NOW who's asking the questions?",
                "Most of the time it was probably real bad being stuck down in a dungeon But some days, when there was a bad storm outside, you'd look out your little window and think, Boy, I'm glad I'm not out there",
                "When I was a child, there were times when we had to entertain ourselves And usually the best way to do that was to turn on the TV",
                "If you were a gladiator in olden days, I bet the inefficiency of how the gladiator fights were organized and scheduled would just drive you up a wall",
                "When the age of the Vikings came to a close, they must have sensed it Probably, they gathered together one evening, slapped each other on the back and said, Hey, good job",
                "During the Middle Ages, probably one of the biggest mistakes was not putting on your armor because you were just going down to the corner",
                "If the Vikings were around today, they would probably be amazed at how much glow-in-the-dark stuff we have, and how we take so much of it for granted",
                "It's funny that pirates were always going around searching for treasure, and they never realized that the real treasure was the fond memories they were creating",
                "If you lived in the Dark Ages, and you were a catapult operator, I bet the most common question people would ask is, Can't you make it shoot farther? No I'm sorry That's as far as it shoots",
                "Is there anything more beautiful than a beautiful, beautiful flamingo, flying across in front of a beautiful sunset? And he's carrying a beautiful rose in his beak, and also he's carrying a very beautiful painting with his feet And also, you're drunk",
                "People laugh when I say that I think a jellyfish is one of the most beautiful things in the world What they don't understand is, I mean a jellyfish with long, blond hair",
                "I saw on this nature show how the male elk douses himself with urine to smell sweeter to the opposite sex What a coincidence!",
                "If you get invited to your first orgy, don't just show up nude That's a common mistake You have to let nudity happen",
                "I don't think God put me on this planet to judge others I think he put me on this planet to gather specimens and take them back to my home planet",
                "If aliens from outer space ever come and we show them our civilization and they make fun of it, we should say we were just kidding, that this isn't really our civilization, but a gag we hoped they would like Then we tell them to come back in twenty years to see our REAL civilization After that, we start a crash program of coming up with an impressive new civilization Either that, or just shoot down the aliens as they're waving good-bye",
                "If Alien was my friend, I'd like to be with him when he went to the dentist When they started drilling, he'd probably go nuts and start eating everybody That Alien!",
                "People just naturally assume that dogs would be incapable of working together on some sort of construction project But what about just a big field full of holes?",
                "Better not take a dog on the space shuttle, because if he sticks his head out when you're coming home, his face might burn up",
                "I wonder if Dracula ever has ticks",
            ]
            function randomQuote() {
                var r = Math.floor(Math.random() * 4);
                var bigSlice = name.slice(0, r + 2);
                var backSlice = name.slice(2);
                var frontSlice = name.slice(-r + 2);
                var randQuote = [String(backSlice), String(frontSlice), String(bigSlice), ""];
                return randQuote[r];
            }
            var punk = ["!", "?", "!?", "!!!", ".",];
            var quoteQuote = `"${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()} ${randomQuote()}${punk[r]}"`;
            var fullQuote = quoteQuote;
            $(".message").empty().append(`<i>${fullQuote}</i><p>`);
            $(".message").append(`- <a href="http://www.pokemon.com/us/pokedex/${name}">${name}`);
            $("#zoom").empty().append(`<img class="img-responsive center-block" src="${sprite}"></a>`);
            $("#img").empty().append(`<img class="img-responsive hvr-buzz-out hvr-float-shadow"src="${sprite}"></a>`);

            $("#img").on("click", function(){
            })

            $("#img").one("click", function() {
                var rq = Math.floor(Math.random() * message.length);
                $(".message").empty().append(`"${message[rq]}${punk[r]}"`);
                $(".message").append(`- <a href="http://www.pokemon.com/us/pokedex/${name}"class="less">${name}`);
            });
        });
    };
    thing();

    $("button").on("click", function() {
    $(".message").empty().append(`<div class="loader img-fluid"></div>`);
        thing();
    });
});
