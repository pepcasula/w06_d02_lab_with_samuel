const Can = function(colour, content){
    this.colour = colour;
    this.content = content;
    this.litres = ["1Litre"];
};

Can.prototype.removePaint = function(){
    return this.litres.pop;
}


module.exports = Can;