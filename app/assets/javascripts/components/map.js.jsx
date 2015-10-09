/* global React */
/* global google */
/* global TreeStore */
/* global TreeActions */

(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.Map = React.createClass({
    markers: [],

    componentDidMount: function(){
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);

      this.map.addListener('idle', function(){
        var bounds = this.map.getBounds();
        var nE = bounds.getNorthEast();
        var sW = bounds.getSouthWest();

        TreeActions.fetch({
          northEast: [nE.J, nE.M],
          southWest: [sW.J, sW.M]
        });

      }.bind(this));

      TreeStore.addChangeListener(this._updateMarkers);
    },

    componentWillUnmount: function(){
      TreeStore.removeChangeListener(this._updateMarkers);
    },

    _findMarkerByPosition: function(pos){
      return this.markers.find(function(marker){
        return (parseFloat(marker.position.J.toFixed(6)) === pos.lat &&
                parseFloat(marker.position.M.toFixed(6)) === pos.lng);
      });
    },

    _updateMarkers: function(){
      var trees = TreeStore.all();
      var newMarks = [];

      //add new marks
      trees.forEach(function(tree){
        var oldMark = this._findMarkerByPosition(tree);

        if(oldMark){
          newMarks.push(oldMark);
        } else {
          var marker = new google.maps.Marker({
            position: {lat: tree.lat, lng: tree.lng},
            map: this.map
          });

          newMarks.push(marker);
        }
      }.bind(this));

      //remove old marks
      this.markers.forEach(function(oldMarker){
        if(newMarks.indexOf(oldMarker) === -1){
          oldMarker.setMap(null);
        }
      });

      this.markers = newMarks;
      //  console.log(this.markers); //TEST to make sure appropriate marks are appearing
    },

    componentWillReceiveProps: function(newProps){
      var hightlightedMarker = this._findMarkerByPosition(newProps.hightlightedLocation);

      //clear old animations
      this.markers.forEach(function(marker){
        marker.setAnimation(null);
      });

      if(hightlightedMarker){
        hightlightedMarker.setAnimation(google.maps.Animation.BOUNCE);
      }
    },

    render: function(){
      return(
        <div className="map" ref="map">
        </div>
      );
    }
  });

  Array.prototype.getUnique = function(){
    var u = {}, a = [];
    for(var i = 0, l = this.length; i < l; ++i){
      if(u.hasOwnProperty(this[i])) {
        continue;
      }
      a.push(this[i]);
      u[this[i]] = 1;
    }
   return a;
 }

}());
