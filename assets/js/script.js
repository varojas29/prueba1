$(function(){
    $("a").click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var gato = this.hash;

          $('html, body').animate({
            scrollTop: (($(gato).offset().top)-84)
          }, 900, function(){
                window.location.hash = gato-84;
              });
            }
          });
        });

        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })
