/* global TreeConstants */
/* global AppDispatcher */
/* global EventEmitter */

(function() {
  'use strict';

  var CHANGE = "change";

  var _trees = [];

  var resetTrees = function(trees){
    _trees = trees;
    TreeStore.emit(CHANGE);
  };

  var TreeStore = window.TreeStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _trees.slice();
    },

    addChangeListener: function(cb){
      this.on(CHANGE, cb);
    },

    removeChangeListener: function(cb){
      this.removeListener(CHANGE, cb);
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
