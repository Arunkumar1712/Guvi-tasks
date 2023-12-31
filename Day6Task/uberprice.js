class uber{
    constructor(destination,Distance,vechicle){
        this.destination=destination;
        this.TotalDistance=Distance;
        this.vechicle=vechicle;
    }
    calculateprice(){
        if(this.vechicle==="Auto"){
        let totalprice=this.TotalDistance*6;
        return (`To travel in Auto total price is ${totalprice}`);
    } 
    else if(this.vechicle==="car"){
        let totalprice=this.TotalDistance*8;
        return totalprice;
    }
    else if(this.vechicle==="bike"){
        let totalprice=this.TotalDistance*4
        return totalprice;
    }
    }
}
const ride =new uber("chennai",45,"car");
console.log(ride.calculateprice());