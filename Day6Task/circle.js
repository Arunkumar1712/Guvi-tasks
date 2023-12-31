class circle{
    constructor (radius,color){
        this.Radius=radius;
        this.colour=color;
    }
    getcolour(){
       return this.colour;
    }
    setcolour(newcolour){
        return this.colour=newcolour;
    }
    getradius(){
        return this.Radius;
    }
    setradius(nr){
        return this.Radius=nr;
    }
    tostring(){
        console.log(`circle[${this.Radius},${this.colour}]`);
    }
    getcircumference(){
        return Math.PI*2*this.Radius;
    }
    getArea(){
        return Math.PI*this.Radius*this.Radius;
    }
}
const cir =new circle(4,"red");
const cir1=new circle(9,"blue")
console.log(cir)
console.log(cir1)
console.log(cir.getcircumference());
console.log(cir.getArea());
cir.tostring()
console.log(cir.getradius());
console.log(cir.getcolour())
cir.setcolour("green");
console.log(cir.getcolour())
cir.setradius(7)
console.log(cir.getradius());
