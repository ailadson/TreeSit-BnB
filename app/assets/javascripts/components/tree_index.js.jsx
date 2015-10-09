/* global React */
/* global TreeStore */
/* global TreeActions */


(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.Index = React.createClass({
    getInitialState: function(){
      return { trees: TreeStore.all() };
    },

    componentDidMount: function(){
      TreeStore.addChangeListener(this._changeTrees);
    },

    componentWillUnmount: function(){
      TreeStore.removeChangeListener(this._changeTrees);
    },

    _changeTrees: function(){
      this.setState({ trees: TreeStore.all() });
    },

    render: function(){
      return (
        <div>
          {this.state.trees}
        </div>
      );
    }
  });

}());
