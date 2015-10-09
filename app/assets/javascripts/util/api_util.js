/* global TreeActions */

var ApiUtil = {
  fetchTrees: function(){
    $.getJSON('api/trees', function(trees){
      TreeActions.reset(trees);
    });
  }
};
