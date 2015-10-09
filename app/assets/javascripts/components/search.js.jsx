(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.Search = React.createClass({
    getInitialState: function(){
      return{ hoveredTreeLocation: null };
    },

    changeHoverTree: function(pos){
      this.setState({ hoveredTreeLocation: pos });
    },

    render: function(){
      return(
        <div className="searchContainer group">
          <Components.Index onHover={this.changeHoverTree}/>
          <Components.Map hightlightedLocation={this.state.hoveredTreeLocation}/>
        </div>
      );
    }
  });

}());
