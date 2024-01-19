// Запросить 2 числа и найти только наибольший общий делитель.


function findGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (b) {
      let temp = b;
      b = a % b;
      a = temp;
    }2
  
    return a;
  }
  
  let num1 = parseInt(prompt("Введите первое число:"));
  let num2 = parseInt(prompt("Введите второе число:"));
  
  if (!isNaN(num1) && !isNaN(num2)) {
    
    console.log("Наибольший общий делитель:", findGCD(num1,num2));
  } else {
    console.log("Пожалуйста, введите корректные числа.");
  }