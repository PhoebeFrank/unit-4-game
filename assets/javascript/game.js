

var random_number;
var lose = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();
    var images = [
        'https://png.pngtree.com/element_origin_min_pic/16/09/16/2157dbf45383fae.jpg',
        'https://png.pngtree.com/element_origin_min_pic/16/08/23/1057bbb58318400.jpg',
        'https://previews.123rf.com/images/ylivdesign/ylivdesign1701/ylivdesign170109541/70565134-diamond-icon-cartoon-style.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YYnKReqD0gTiDhah3YMKoLBf0kiG9iFZNYz709YXTejLJjul',
    ]
    random_number = Math.floor(Math.random() * 102) + 19;

    $("#random_number").html('Random Number: ' + random_number);

    for (var i = 0; i < 4; i++) {
        var randomValue = Math.floor(Math.random() * 12) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "dataRandom": randomValue
        });

        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size": "cover"
        });

        $(".crystals").append(crystal);
    }
        $("#previous").html("Total Score: " + previous);

    }

resetAndStart();

$(document).on('click',".crystal",function(){
   var num = parseInt($(this).attr('dataRandom'));
   previous += num;
   $("#previous").html("Total Score: " + previous);
   console.log (previous);

   if(previous > random_number){
       lose++;
       $("#lose").html('Losses: ' + lose);

        previous = 0;
       resetAndStart();
   }
   else if(previous === random_number){
       win++;
       $("#win").html('Wins: ' + win);
       previous = 0;
       resetAndStart();
   }
   
});

//four crystal buttons that will have a random value each game between 1 and 12
//the number to match should be between 19 and 120
//every time user wins or loses, the crystal value will reset 
//