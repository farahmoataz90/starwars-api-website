$(document).ready(function(){
    $("#starwars").on("click",function(){
        const randomNumber = Math.ceil(Math.random() * 88);
        $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json` , function(data){

            $("h4.name").text(data['name'])
            $(".character-img").attr("src",data['image'])
            $("p.aff").text(data['affiliations'])
            $("p.app").text(data['apprentices'])
            $("p.gen").text(data['gender'])
            $("p.dim").text(data['height'])
            $("p.spe").text(data['species'])
            $("p.wiki").text(data['wiki'])
            
        })
    })
        

})
