/* global React */

(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.TreeIndexItem = React.createClass({
    hightlightLocation: function(){
      var tree = this.props.tree;
      this.props.onHover.call(null, {lat: tree.lat, lng: tree.lng});
    },

    render: function(){
      return (
        <div className="tree-item" onMouseEnter={this.hightlightLocation}>
          {this.props.tree.description}
        </div>
      );
    }
  });
}());
