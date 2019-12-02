define(function() {


    let internals = {}; 
    let externals = {};

    internals.getMovies = (searchText) => {
      axios.get(` http://www.omdbapi.com/?s=${searchText}&apikey=fda584ed`)
        .then((response) => {
            //console.log(response);
            return response.data.Search;

        })
        .catch((err) => {
            console.log(err);
        });
    };

    externals.getData = function(searchText) {
        return internals.getMovies(searchText);
    }



    return internals;

});