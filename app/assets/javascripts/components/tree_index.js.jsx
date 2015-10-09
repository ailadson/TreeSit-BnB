/* global React */
/* global TreeStore */
/* global TreeActions */


(function() {
  'use strict';

  window.Index = React.createClass({
    getInitialState: function(){
      return { trees: TreeStore.all() };
    },

    componentDidMount: function(){
      TreeStore.addChangeListener(this._changeTrees);
      TreeActions.fetch();
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
