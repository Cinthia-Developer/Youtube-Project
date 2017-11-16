$.fn.youtube = function(listaVideo){
    if(listaVideo.length !==0){
        for(var i=0; i<listaVideo.length; i++){
            let contVideo =  '<iframe class="contVideo" frameborder="0" allowfullscreen></iframe>';
            let url = 'https://www.youtube.com/embed/' + listaVideo[i];
            
            let $cont_video = $(contVideo);
            $cont_video.attr("src", url);
            $cont_video.css("width", "20%");
            $cont_video.css("height", "150px");
            $cont_video.css("padding", "5px");
            $(this).append($cont_video);
        };
    }
}