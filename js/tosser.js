Array.prototype.sum = function() {
  return (! this.length) ? 0 : this.slice(1).sum() +
      ((typeof this[0] == 'number') ? this[0] : 0);
};

function Toss() {
  return {
    flip: function(){
      this.calculate();
      
    },
    generate: function(){
      return Math.random();
    },
    calculate: function(){
      var results = new Array();
      for (var i=0; i < 700; i++) { // changes the number of spins
        num = this.generate();
        
        if(num > 0.5) {
          value = 1;
        } else {
          value = 0;
        }
        
        results[i] = value; 
      };
      
      count = results.sum()
      
      if (count > 350) {
        this.fuckingPrint("Heads")
      } 
      
      else if( count < 350){
        this.fuckingPrint("Tails")
      } 
      
      else {
        this.fuckingPrint("YOU JUST BROKE THE FUCKING INTERNET")
      };            
    },
    fuckingPrint: function(thingy){
      $("h2").text(thingy);
    }
  }
}

var coin = new Toss() // INSTANTIATE!!!!!!(create the fucking instant)!!!!!!


// run on load
$(function(){
  coin.flip();
})


// 
// // [i] = key