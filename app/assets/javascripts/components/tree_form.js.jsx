/* global React */
/* global TreeActions */

(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.TreeForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function(){
      return { lat: this.props.location.query.lat,
               lng: this.props.location.query.lng,
               description: "",
               seating: 0
             };
    },

    componentWillReceiveProps: function(){
      this.setState({ lat: this.props.location.query.lat,
                      lng: this.props.location.query.lng
                    });
    },

    submit: function(e){
      e.preventDefault();
      TreeActions.create(this.state);
    },

    render: function(){
      return(
        <form className="tree-form" onSubmit={this.submit}>
          <label>
            Latitude: <input type="number"
                             name="lat"
                             step="any"
                             valueLink={this.linkState('lat')}/>
          </label>
          <br/>
          <br/>
          <label>
            Longitude: <input type="number"
                              name="lng"
                              step="any"
                              valueLink={this.linkState('lng')}/>
          </label>
          <br/>
          <br/>
            <label>
             # of Spaces Under This Tree: <input valueLink={this.linkState('seating')}
                                                 type="number"
                                                 name="seating"/>
            </label>
            <br/>
            <br/>

          Description<br/>
          <textarea rows="4"
                    name="description"
                    valueLink={this.linkState('description')}></textarea>
          <br/>
          <br/>
          <input type="submit" value="Add A Sitting Tree"/>
        </form>
      );
    }
  });

}());
