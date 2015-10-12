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
      var filter = FilterParamStore.getFilter();
      var filteredTrees = TreeStore.all().filter(function(tree){
        return (tree.seating <= filter.maxSeating && tree.seating >= filter.minSeating);
      });

      this.setState({ trees: filteredTrees });
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
