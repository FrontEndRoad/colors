(function($){
	var game = {
		colors: ['#90D290','#5C5DD5','#D260DF','#A8C232','#36C268','#E75C77','#5AE5E5','#ADF77A'],
		gird: 8,
		arr: [],
		newArr: [],
		gameWid: $('.game').width(),
		init: function(){
			this.makeGird();

		},
		makeGird: function(){
			var htm = '';
			/*this.colors.sort(function(){ 
				var ran = Math.random();
				return 0.5 - ran ;
				console.info(ran)
			});*/
			for(var i=0; i<this.gird*this.gird; i++){
				var rc = Math.floor(Math.random()*this.colors.length);
				var getColor = this.colors[rc];
				htm += '<li style="width:'+this.gameWid/this.gird+'px;height:'+this.gameWid/this.gird+'px;background:'+getColor+'" data-color="'+getColor+'"></li>'
			}
			$('.gameLst').html(htm);
		},
		randColor: function(){
			return  '#' + (function(color){
			    return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
			      && (color.length == 6) ?  color : arguments.callee(color);
			})('');
		}
		


	}	
	game.init()
	


})(jQuery)