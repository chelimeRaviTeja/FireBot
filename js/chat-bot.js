function chatBot() {
	
	
	this.input;
	
	
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "um... hi?";
		
		if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "Good";
		
		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "what's so funny?";
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "don't be such a negative nancy :(";
		
		if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return ["alright, see you around"];
		
		if(this.match('(dumb|stupid|is that all)'))
			return ["you can make me smarter if you'd like"];

		if(this.match('(play some music|music|play music)'))
			return ["I am not trained for this"];

		if(this.match('(mozilla developer version|What is the latest developer version of mozilla)'))
			return ["63.0b9"];

		if(this.match('(mozilla firefox quantum version|What is the latest firefox quantum version of mozilla)'))
			return ["61.0.1"];
	
		if(this.match('(what is an add-on|add on|add-on meaning)'))
			return ["something that has been or can be added to an existing object or arrangement."];

		if(this.match('(what is an open source|open source)'))
			return ["denoting software for which the original source code is made freely available and may be redistributed and modified."];

		if(this.input == 'noop')
			return;

		return input + " (I am not trained for this)";
	}
	
	
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
