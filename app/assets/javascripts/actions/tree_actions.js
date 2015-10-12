/* global AppDispatcher */
/* global ApiUtil */
/* global TreeConstants */


var TreeActions = {
  reset: function(trees){
    AppDispatcher.dispatch({
      actionType: TreeConstants.RESET,
      payload: trees
    });
  },

  fetch: function(bounds){
    // AppDispatcher.dispatch({
    //   actionType: TreeConstants.FETCHING
    // });

    ApiUtil.fetchTrees(bounds);
  },

  add: function(tree){
    AppDispatcher.dispatch({
      actionType: TreeConstants.ADD,
      payload: tree
    });
  },

  create: function(data){
    AppDispatcher.dispatch({
      actionType: TreeConstants.CREATING
    });

    ApiUtil.createTree(data);
  }
};
