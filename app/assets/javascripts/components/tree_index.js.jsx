/* global React */
/* global TreeStore */
/* global TreeActions */
/* global TreeIndexItem */


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
        <div className="index">
          <div className="innerIndex">{
            this.state.trees.map(function(tree){
              return <Components.TreeIndexItem tree={tree} key={tree.id} onHover={this.props.onHover} />;
            }.bind(this))
          }</div>
      </div>
      );
    }
  });

}());
