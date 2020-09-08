let name={
    firstName: "Jalpa",
    lastName: "Modasiya"
}

let printName = function (state,country) {
    console.log(this.firstName +  " " + this.lastName +  " "+ state +  " "+ country);
}

printName.apply(name,["CA", "USA"]);
let printN =  printName.bind(name);
printN();

Function.prototype.myBind = function (...args) {
    let org= this;
    let param =  args.slice(1)
    return function (...arg2) {
        org.call(args[0], [...param, ...arg2])
    }

}

let printMyBind=  printName.myBind(name, "CA", "USAE");
printMyBind();

let counter = 0;
const getData= () =>{
    console.log("Fetching data...", counter ++);
}


function doSomething(func, delay) {
    let timer;
    return function(){
        let context= this, args = arguments; // To pass some arguments, context
        clearTimeout(timer);
        timer = setTimeout(() => {
                func.apply(context,args)
            }, delay
        )
    }
}

const debounceFunc = doSomething(getData, 300)


const sum = (a) => {
    return function (b) {
        if(b){
            return sum(a +  b);
        }
        return  a;
    }
}
