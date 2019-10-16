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


(function ($, H) {

    var Actor = {

        init: function (config) {

            this.c = config;
            this.bindEvents();
            this.setupTemplates();



            $.ajaxSetup({
                beforeSend : function () {
                    $('#preloader').fadeIn(100);
                },
                complete : function () {
                    $('#preloader').fadeOut(100);
                }
            })


        },

        bindEvents: function () {
            this.c.letterSelection.on('change', this.fetchActorsBylastname);
            this.c.actorList.on('click', 'li', this.fetchInfo);
            this.c.actorInfo.on('click','span',this.close);


        },
        fetchActorsBylastname: function () {
            var self = Actor;
            $.ajax({
                url: "/actors/" + $(this).val(),
                success: function (res) {
               //     console.log(res);
             //       console.log(self.c.actorListTemplate(res));
                    self.c.actorList.html(self.c.actorListTemplate(res));
                }
            })
        },
        setupTemplates: function () {
            //console.log(this.c.actorListTemplate);
            //console.log(H.compile(this.c.actorListTemplate));
            this.c.actorListTemplate = H.compile(this.c.actorListTemplate);

        },
        fetchInfo: function () {

         //   console.log($(this).data('actor_id'));
            var self = Actor;
            $.ajax({

                url: "/actor-info/"+ $(this).data('actor_id'),
                success : function (res) {
                //   console.log(res[0].film_info);
                   self.c.actorInfo.find('p').text(res[0].film_info)
                       .end()
                       .slideDown();


                }
            })


        },

        close: function ()
        {
        $(this).parents('.actor_info').slideUp();
        }

    };

    Actor.init({
        letterSelection: $('#letter-selection'),
        actorListTemplate: $('#actor-list-template').html(),
        actorList: $('.actor-list'),
        actorInfo: $('.actor_info')
    });


})(jQuery, Handlebars)








