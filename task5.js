let list =[];

let pologit= 0;
let nodigit = 0;
let nul = 0;

let chet = 0;
let noChet = 0;

alert("enter 10 nums !")
for (i= 0; i<10; i++){
    
    let d = parseInt(prompt("enter "+ i + " nums"))

    if (!isNaN(d)){

        if(d > 0){ pologit++}
        else if (d< 0){ nodigit++}
        else{nul++}

        if(d%2 == 0){
            chet++

        }
        else{noChet++}
}

    
    console.log(d);
}

console.log("pologit "+ pologit+" negative "+ nodigit+" nuli "+nul+" chet "+chet+" noChet "+noChet);