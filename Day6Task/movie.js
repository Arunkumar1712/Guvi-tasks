class movie{
    constructor(title,studio,rating="PG"){
        this.Title=title;
        this.Studio=studio;
        this.Rating=rating;

    }
    static getpg(movies){
        let ans =[];
        for(let i = 0;i < movies.length;i++){
            if(movies[i].Rating === "PG"){
                ans.push(movies[i]);
            }
        }
        return ans;
    }

}
let movie1=new movie("Casino Royale","Eon productions","PG1");
let movie2=new movie("something","Avm")
const moviesArrays =[
    new movie("movie1","std1","PG"),
    new movie("kdk","sdt3","pg1"),
    new movie("ghd","dfg","PG")
];
const ans1 = movie.getpg(moviesArrays);
console.log(ans1)
for(var j=0;j<ans1.length;j++){
    console.log(`${ans1[j].Title} and its rating is ${ans1[j].Rating}`)
}
console.log(movie1);
