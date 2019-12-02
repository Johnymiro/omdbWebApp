require(['controllers/route2-controller'], function(controller) {
    $(document).ready(function() {
        console.log('DOM is mounted and ready');

        controller.start();
      
    });
});
