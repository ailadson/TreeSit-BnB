/* global AppDispatcher */
/* global FilterConstants */

var FilterActions = {
  setBounds: function(bounds){
    AppDispatcher.dispatch({
      actionType: FilterConstants.SET_BOUNDS,
      payload: bounds
    });
  },

  setMinSeating: function(val){
    AppDispatcher.dispatch({
      actionType: FilterConstants.SET_MAX,
      payload: val
    });
  },

  setMaxSeating: function(val){
    AppDispatcher.dispatch({
      actionType: FilterConstants.SET_MIN,
      payload: val
    });
  }
};
