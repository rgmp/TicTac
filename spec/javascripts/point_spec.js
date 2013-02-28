describe('Point', function(){
  	var point;

	beforeEach(function() {
		point = new Point({x: 1, y: 2});
	});
	
	it("should have an x value", function() {
		expect(point.get('x')).toBe(1);
	});
	
	it("should have an y value", function() {
		expect(point.get('y')).toBe(2);
	});
	
	describe('#equalTo', function() {
		it("should have the same x and y values", function() {
			var otherPoint = new Point({x: 1, y: 2});
			expect(point.equalTo(otherPoint)).toBe(true);
		})
	})
})