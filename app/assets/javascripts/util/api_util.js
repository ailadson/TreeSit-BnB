/* global TreeActions */

var ApiUtil = {
  fetchTrees: function(bounds){
    $.getJSON('api/trees', { bounds: bounds }, function(trees){
      TreeActions.reset(trees);
    });
  },

  createTree: function(data){
    $.post('api/trees', {tree: data}, function(tree){
      TreeActions.add(tree);
    });
  }
};
