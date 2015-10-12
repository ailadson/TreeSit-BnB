/* global React */
/* global FilterActions */

(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.FilterParams = React.createClass({
    componentDidMount: function(){
      FilterActions.setMinSeating(0);
      FilterActions.setMaxSeating(100);
    },

    setMinSeats: function(e){
      FilterActions.setMinSeating(parseInt(e.target.value));
    },

    setMaxSeats: function(e){
      FilterActions.setMaxSeating(parseInt(e.target.value));
    },

    render: function(){
      return(
        <div>
          Minimum # of Seats: <input type="number"
                                     onChange={this.setMinSeats}/>
        <br/>
        Maximum # of Seats: <input type="number"
                                   onChange={this.setMaxSeats}/>
        </div>
      );
    }
  });
}());
