var Point = Backbone.Model.extend({
	equalTo: function(otherPoint) {
		return  this.get('x') === otherPoint.get('x') &&
		 		this.get('y') === otherPoint.get('y');
	}
});