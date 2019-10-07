/*
//console.log($);

$('#letter-selection').on('change',function(e){
    //console.log($(this).val());
   $.ajax({
       url:"/actors/"+$(this).val(),
       success : function (res) {
      //     console.log(res);

        //   $('.actor-list').html("<li>ali kalant</li>");


let html = "";

           $.each(res,function (i,v) {

              html += "<li>";
               html += "<a href='#'>";
               html += v.first_name+" "+v.last_name;
               html += "</a>";
               html += "</li>";

               $('.actor-list').html(html);
           });

       }
   });
}); */



(function ($,H) {

    var Actor ={

        init :function (config) {

            this.c = config;
            this.bindEvents();
        },

        bindEvents : function () {
          this.c.letterSelection.on('change',this.fetchActorsBylastname)


            this.c.actor.on('click',function () {
                console.log("ehsan");
            })
        },
        fetchActorsBylastname : function () {
           $.ajax({
               url: "/actors/" + $(this).val(),
               success : function (res) {
                   console.log(res);
               }
           })



        }

    };

    Actor.init({letterSelection : $('#letter-selection')
    ,   actor : $('.actor-list')
    });


})(jQuery,handlebars)








