define(['views/omdb-movie-view', 'services/omdb-service'] , 
          (view, service) => {

    let external = {};
    let internals = {};

    external.start = function (){

        view.render();
        console.log("hellop");
        console.log(service.getMovies("home"));

        /*
        
        $('#searchForm').on('submit', () => {
            let searchText = $('#searchText').val();
            getMovies(searchText);
            console.log("route2")
            
        });
        */
    }

    function getMovies(searchText){
        console.log(searchText);
    }

    return external;

});

