var TicTac = {
  Views: {},
  Collections: {},
  Models: {},
  Turn:'X',
  GameOver:false,
  WinningLocs:[	[ '00','10','20' ],[ '01','11','21' ],[ '02','12','22' ],
  				[ '00','01','02' ],[ '10','11','12' ],[ '20','21','22' ],
  				[ '00','11','22' ],[ '20','11','02' ] ]
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
	TicTac.Cells = new this.Collections.BoardCells([ 	new this.Models.Cell({location:'00'}),
													new this.Models.Cell({location:'10'}),
													new this.Models.Cell({location:'20'}),
													new this.Models.Cell({location:'01'}),
													new this.Models.Cell({location:'11'}),
													new this.Models.Cell({location:'21'}),
													new this.Models.Cell({location:'02'}),
													new this.Models.Cell({location:'12'}),
													new this.Models.Cell({location:'22'}) ]);
}
$(document).ready(function() {
	var appView = new TicTac.Views.Game();
	TicTac.initialize();
});



