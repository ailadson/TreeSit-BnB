/* global React */
/* global google */
/* global TreeStore */
/* global TreeActions */

(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.Map = React.createClass({
    componentDidMount: function(){
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);

      this.map.addListener('idle', function(){
        TreeActions.fetch();
      });

      TreeStore.addChangeListener(this._updateMarkers);
    },

    componentWillUnmount: function(){
      TreeStore.removeChangeListener(this._updateMarkers);
    },

    _updateMarkers: function(){
      var trees = TreeStore.all();

      trees.forEach(function(tree){
        new google.maps.Marker({
          position: {lat: tree.lat, lng: tree.lng},
          map: this.map
        });
      }.bind(this));
    },

    render: function(){
      return(
        <div className="map" ref="map">
        </div>
      );
    }
  });

}());
