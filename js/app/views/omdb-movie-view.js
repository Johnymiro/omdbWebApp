define(() => {

    var internals = { 
        handlers: {},
        elements: {}
    }

    internals.elements.app = $('#app');

    var externals = {};

    internals.createSearchForm = () => {
       return(
            `<nav class="navbar navbar-light bg-light">
                <a class="navbar-brand"><strong>MoviePedia</strong></a>
                <form class="form-inline" id="searchForm">
                    <input id="searchText" class="form-control mr-sm-2" type="search" placeholder="Search"
                    aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>`
            );
    };

    internals.renderSearchForm = () => {
        internals.elements.app.append(internals.createSearchForm());
    };


    externals.render = () => {
        internals.renderSearchForm();
    }

    return externals;


});