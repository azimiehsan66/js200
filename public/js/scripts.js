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
            this.setupTemplates();
        },

        bindEvents : function () {
          this.c.letterSelection.on('change',this.fetchActorsBylastname)



        },
        fetchActorsBylastname : function () {
            var self = Actor;
           $.ajax({
               url: "/actors/" + $(this).val(),
               success : function (res) {
                   console.log(res);
                   console.log(self.c.actorListTemplate(res));
                   self.c.actorList.html(self.c.actorListTemplate(res));
               }
           })
        },
        setupTemplates : function () {
            //console.log(this.c.actorListTemplate);
            //console.log(H.compile(this.c.actorListTemplate));
            this.c.actorListTemplate = H.compile(this.c.actorListTemplate);

        }

    };

    Actor.init({
        letterSelection : $('#letter-selection'),
        actorListTemplate : $('#actor-list-template').html(),
        actorList : $('.actor-list')
});


})(jQuery,Handlebars)








