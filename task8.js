let list = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","НД"]
let triger = "ok"
let i = -1 

while(true){
    
    if (i === 7) {
        i = -1;
    }
    i++
    let a = prompt(list[i])
    if (a == triger){break}
}