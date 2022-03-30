//This is 1st approch to fetch data every time.
// let getData=()=>{
//     console.log("Fetching data")
// }
//This is not optimize way so use debouncing 

let getData=()=>{
    console.log("fetch Data by debouncing")
}


let doSomeMagic=(fn,d)=>{
    let timer
    return function(){
    let context=this
    let arg=arguments
    clearTimeout(timer);
    timer=setTimeout(()=>{
        fn.apply(context,arg)
    },d)
}
}

let betterFunction=doSomeMagic(getData,500)


///this is throttling 

let getData1=(text)=>{
    console.log("fetch data by throtlling "+text)
}
    let callThrotlling=(fn,delay)=>
    {
        let flag=true;
      
        return function(){
            let context=this
            let arg=arguments
            if(flag)
            {
                fn.apply(context,arg)
                flag=false
                setTimeout(()=>{
                    flag=true
                },delay)
            }
        }
    }

    let throtlling=callThrotlling(getData1,500)








