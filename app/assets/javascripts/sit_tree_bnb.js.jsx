/* global React */
/* global ReactRouter */
/* global Components */

$(function(){

  var root = document.getElementById("content");
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return(
        <div className="appContainer">
          <header><h1>Sitting Tree, BnB</h1></header>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Components.Search} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);

});
