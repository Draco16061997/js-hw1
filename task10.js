// Игра «Угадай число». Предложить пользователю загадать число
//  от 0 до 100 и отгадать его следующим способом: каждую итерацию 
//  цикла делите диапазон чисел пополам, записываете результат в N 
//  и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
//  В зависимости от того что указал пользователь, уменьшаете диапазон.
//   Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
//   Если пользователь указал, что его число > 50, то изменили диапазон на от
//    51 до 100.
//  И так до тех пор, пока пользова- тель не выберет == N.



let lower_bound = 0
let upper_bound = 100


while(true){
    let centr =Math.floor((lower_bound +upper_bound)/ 2)

    let respounse = prompt("число больше > < или = "+centr )

    if(respounse == "="){console.log("ok uour num "+centr)
    break

    }
    else if(respounse == ">"){lower_bound = centr+1
    }
    else if (respounse == "<"){upper_bound = centr -1}
    else{console.error("incorect")}
}





