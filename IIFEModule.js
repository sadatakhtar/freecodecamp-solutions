
let funModule = (function(){
  return {
    isCuteMixin: function(obj){
      return true;
    },
    singMixin: function(obj){
      obj.sing = function(){
        console.log("Singing to an awesome tune");
      };
    }
  }

})();
