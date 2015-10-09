/* global TreeConstants */
/* global AppDispatcher */
/* global EventEmitter */

(function() {
  'use strict';

  var _trees = [];

  var resetTrees = function(trees){
    _trees = trees;
  };

  var TreeStore = window.TreeStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _trees.slice();
    },

    dispatchId: AppDispatcher.register(function(action){
      switch(action.actionType){
        case TreeConstants.RESET:
          resetTrees(action.payload);
          break;
      }
    })
  });
}());
