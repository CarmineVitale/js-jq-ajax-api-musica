$(document).ready(function () {

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function(data) {
            var dati = data.response;
            for (var i = 0; i < data.response.length; i++) {
                var dischi = {
					immagine: dati[i].poster,
					titolo: dati[i].title,
					autore:dati[i].author,
                    anno: dati[i].year,
                    genere: dati[i].genre.toLowerCase(),
                }
                var html = template(dischi);
			    $('.cds-container').append(html);

            } //fine for
            
        },//fine success
        error: function() {
            alert('error');
        }
    }); //fine chiamata ajax


    //SElect changes
    $('#genere').change(function () { 
        var scelta = $(this).val();
        if (scelta == 'seleziona') {
            $('.cd').show();
        } else {
            $('.cd').hide();
            $('.cd.' + scelta).show();
        }
        
        
        
    });

    
    
}); //<---end ready








/*
Descrizione:
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
Servendoci di handlebars stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.

*/