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
    AppDispatcher.dispatch({
      actionType: TreeConstants.FETCHING
    });

    ApiUtil.fetchTrees(bounds);
  }
};
