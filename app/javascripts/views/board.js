TicTac.Views.Board = Backbone.View.extend({
	el: ".container",
	boardHtml:"<table border='1'><tr><td id='00'></td><td id='10'></td><td id='20'></td></tr><tr><td id='01'></td><td id='11'></td><td id='21'></td></tr><tr><td id='02'></td><td id='12'></td><td id='22'></td></tr></table>",

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.boardHtml);
	}
})