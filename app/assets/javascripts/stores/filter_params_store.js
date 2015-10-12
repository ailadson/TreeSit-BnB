/* global EventEmitter */
/* global FilterConstants */
/* global AppDispatcher */

(function() {
  'use strict';

  var CHANGE = "CHANGE";

  var _filterParams = {
    bounds: [null, null],
    minSeating: 0,
    maxSeating: 0
  };

  var setMax = function(max){
    _filterParams.maxSeating = max;
    FilterParamStore.changed();
  };

  var setMin = function(min){
    _filterParams.minSeating = min;
    FilterParamStore.changed();
  };

  var setBounds = function(bounds){
    _filterParams.bounds = bounds;
    FilterParamStore.changed();
  };

  var FilterParamStore = window.FilterParamStore = $.extend({}, EventEmitter.prototype, {
    getFilter: function(){
      return {
        bounds: this.getBounds(),
        minSeating: this.getMax(),
        maxSeating: this.getMin()
      };
    },

    getMax: function(){
      return _filterParams.maxSeating;
    },

    getMin: function(){
      return _filterParams.minSeating;
    },

    getBounds: function(){
      return _filterParams.bounds.slice();
    },

    addChangeListener: function(cb){
      this.on(CHANGE, cb);
    },

    removeChangeListener: function(cb){
      this.on(CHANGE, cb);
    },

    changed: function(){
      this.emit(CHANGE);
    },

    dispatchId: AppDispatcher.register(function(action){
      switch(action.actionType){
        case FilterConstants.SET_MAX:
          setMax(action.payload);
          break;
        case FilterConstants.SET_MIN:
          setMin(action.payload);
          break;
        case FilterConstants.SET_BOUNDS:
          setBounds(action.payload);
          break;
      }
    }),

  });


}());
