var Triangle = Backbone.Model.extend({
	isTriangle: function() {
		return !this.pointsAreSame() && !this.pointsAreInLine();
	},
	
	pointsAreSame: function() {
		var point1 = this.get('point1');
		var point2 = this.get('point2');
		var point3 = this.get('point3');
		
		return point1.equalTo(point2) || point2.equalTo(point3);
	},
	
	pointsAreInLine: function() {
		var point1 = this.get('point1');
		var point2 = this.get('point2');
		var point3 = this.get('point3');
		var slope1 = getSlope(point1,point2);
		var slope2 = getSlope(point2,point3);
		
		function getSlope(point1,point2) {
			return ((point2.get('y') - point1.get('y')) / (point2.get('x') - point1.get('x')));
		}
		
		return slope1 === slope2;
	}
});