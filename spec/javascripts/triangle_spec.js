describe('Triangle', function(){
  	var triangle;
	
	beforeEach(function() {
		triangle = new Triangle({
			point1: new Point({x: 0, y: 0}),
			point2: new Point({x: 0, y: 1}),
			point3: new Point({x: 1, y: 0})
		});
	});
	
	describe("#isTriangle", function() {
		it("should be valid when the points are in a triangle arrangment", function() {
			expect(triangle.isTriangle()).toBe(true);
		});

		it("should not be valid if all the points are the same", function () {
			triangle = new Triangle({
				point1: new Point({x: 0, y: 0}),
				point2: new Point({x: 0, y: 0}),
				point3: new Point({x: 0, y: 0})
			});
			expect(triangle.isTriangle()).toBe(false);
		});
		
		it("should not be valid if all the points are in a line", function() {
			triangle = new Triangle({
				point1: new Point({x: 0, y: 0}),
				point2: new Point({x: 1, y: 3}),
				point3: new Point({x: 2, y: 6})
			});
			expect(triangle.isTriangle()).toBe(false);
		});
	});
});