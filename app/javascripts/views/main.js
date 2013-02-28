var TicTac = {
  Views: {},
  Collections: {},
  Models: {}
}


//TicTac.Views.AppView = Backbone.View.extend({
//  // el - stands for element. Every view has a element associate in with HTML content will be rendered.
//  el: '.container',
//  // It's the first function called when this view it's instantiated.
//  initialize: function(){
//    this.currentGame
//    this.render();
//  },
//    // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content. Like the H>
//  render: function(){
//    this.$el.html("Tic Tac Toe Welcome");
//    new TicTac.Views.Game();
//    }
//});

TicTac.initialize = function(){

}


$(document).ready(function() {
  TicTac.initialize();
  var appView = new TicTac.Views.Game();
});



