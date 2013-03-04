TicTac.Models.Cell = Backbone.Model.extend({

	defaults: {
		location: '00',
		value: ''
	},

//  initialize: function() {
//    var boardView = new Board();
//  }
	
	select: function() {
		if (!TicTac.GameOver && this.get('value') === '' ) {
			this.set('value',TicTac.Turn);
			$('#' + this.get('location')).html(TicTac.Turn);
			
			this.checkWin();

			( TicTac.Turn === 'X' ) ? TicTac.Turn='O' : TicTac.Turn='X'; //change turns
			$('#turn').html(TicTac.Turn);
		}

	},

	checkWin: function() {
		var xLocations = '';
		var oLocations = '';
		var allLocations = '';
		_.each(TicTac.Cells.models,function(cell) {
			switch (cell.get('value')) {
				case 'X':
					xLocations += ' ' + cell.get('location');
					break;
				case 'O':
					oLocations += ' ' + cell.get('location');
					break;
			}
		});

		allLocations = xLocations + oLocations;
		if (allLocations.split(' ').length === 10) { // no more turns - draw
			TicTac.GameOver = true;
			$('#turn').hide();
			$("#notification").html('DRAW');
		}

		switch (TicTac.Turn) {
			case 'X':
				var win = checkLocs(xLocations);
				if (win) {
					TicTac.GameOver = true;
					$('#turn').hide();
					$("#notification").html('X WINS');
					highlightLine(win);
				}
				break;
			case 'O':
				var win = checkLocs(oLocations);
				if (win) {
					TicTac.GameOver = true;
					$('#turn').hide();
					$("#notification").html('O WINS');
					highlightLine(win);
				}
				break;
		}

		function checkLocs(locs) {
			var result = false;
			var matches;
			_.each(TicTac.WinningLocs,function(lineLocs) {
				matches = 0;
				_.each(lineLocs,function(loc) {
					if (locs.indexOf(loc) !== -1) matches++;
				});
				if (matches === 3) result = lineLocs;
			});
			return result;
		}

		function highlightLine(lineLocs) {
			_.each(lineLocs,function(loc) {
				$('#' + loc).css('color','red');
				$('#' + loc).css('font-weight','bold');
			});
		}
	},

	initialize: function() {
		$('#' + this.get('location')).html(this.get('value'));
		_.bindAll(this,'select');
		$('#' + this.get('location')).bind('click',this.select);
	}
});