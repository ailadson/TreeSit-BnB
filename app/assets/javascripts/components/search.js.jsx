/* global Components */
/* global React */
/* global FilterParamStore */
/* global TreeActions */

(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.Search = React.createClass({
    getInitialState: function(){
      return{ hoveredTreeLocation: null, filter: FilterParamStore.getFilter() };
    },

    componentDidMount: function(){
      FilterParamStore.addChangeListener(this._updateFilter);
    },

    componentWillUnmount: function(){
      FilterParamStore.removeChangeListener(this._updateFilter);
    },

    _updateFilter: function(){

      var filter = FilterParamStore.getFilter();
      TreeActions.fetch({
        northEast: filter.bounds[0],
        southWest: filter.bounds[1]
      });

      this.setState({ filter: filter });
    },

    changeHoverTree: function(pos){
      this.setState({ hoveredTreeLocation: pos });
    },

    render: function(){
      return(
        <div className="searchContainer group">
          <Components.FilterParams />
          <Components.Index onHover={this.changeHoverTree}/>
          <Components.Map hightlightedLocation={this.state.hoveredTreeLocation}/>
        </div>
      );
    }
  });

}());
