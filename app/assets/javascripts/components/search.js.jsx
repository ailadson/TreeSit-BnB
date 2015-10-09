(function() {
  'use strict';

  window.Components = window.Components || {};

  window.Components.Search = React.createClass({
    render: function(){
      return(
        <div>
          <Components.Index />
          <Components.Map />
        </div>
      );
    }
  });

}());
