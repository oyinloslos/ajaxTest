
	function Play(name){
		this.name = name || "oyin";
	}
	exports.Play = Play;

	Play.prototype.greets =  function(target) {
		if(!target){
			console.error("cannot find target");
			return;
		}

		console.log(this.name + " greets " + target);
	}

	Play.prototype.lateGreeting = function(target, cb) {
		//igboro.....
		var that = this;

		setTimeout(function(){
			try {
				cb(null, that.greets(target));

			} catch(err) {
				cb(err);
			}

		}, 1000)
	}
	//anything settimeout is async
	
	module.exports = Play

