/* global TreeActions */

var ApiUtil = {
  fetchTrees: function(bounds){
    $.getJSON('api/trees', { bounds: bounds }, function(trees){
      TreeActions.reset(trees);
    });
  }
};
