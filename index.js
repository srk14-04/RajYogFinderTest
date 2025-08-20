let date1 = 22;
let month1 = 4;
let year1 = 1904;
let male = true;
function sum(num ){
    let total = 0;
    let  number = num;
    while(number > 0){
        let  rem = number % 10;
        total = total + rem;
        number = Math.floor(number / 10);// make it floor here
    };
    

    if(total > 9){
        let total2= 0;
        while(total>0){
            let  rem2 = total % 10;
            total2 = total2  + rem2;
            total = Math.floor(total / 10); // make it floor here

        }
        if(total2 == 10){
            return 1;
        }else{
            return total2 ;
        }
        

    }else{
        return total;
    }
}


let dateSum = sum(date1);
let monthSum = sum(month1);
let yearSum = sum(year1);

function month(monthSum , dateSum  , yearSum){
    let result = monthSum + dateSum + yearSum;
    let month2 = sum(result);
    return month2;
}
function yearMale(yearSum){
    let result =  11- yearSum;
    if(result == 10){
        return 1;
    }else{
        return result;
    }

}
function yearFemale(yearSum){
    let result =  22- yearSum;
    let finalResult = 0;
    if(result > 9){
        finalResult = sum(result);
    }

    if(finalResult == 10){
        return 1;
    }else{
        return finalResult;
    }

}

let monthSum2 = month(monthSum , dateSum , yearSum);

let yearSum2 = 0;
if(male == true) { 
        yearSum2 = yearMale(yearSum);

    }else{
        yearSum2 = yearFemale(yearSum);
    } 


function matrixCalc( num1 , num2 , num3 , dateSum , monthSum2 , yearSum2){
    let arr = [
        [0 , 0 , 0],
        [0 , 0 , 0],
        [0 , 0 , 0]
    ]


     let result = "" + num1 + num2 + num3 + dateSum + monthSum2 + yearSum2;

    for(let char of result){
       if(char == 4){
        arr[0][0] = 1;
       }else if(char == 9){
        arr[0][1] = 1;
       }else if(char == 2){
        arr[0][2] = 1;
       }else if(char == 3){
        arr[1][0] = 1;
       }else if(char == 5){
        arr[1][1] = 1;
       }else if(char == 7){
        arr[1][2] = 1;
       }else if(char == 8){
        arr[2][0] = 1;
       }else if(char == 1){
        arr[2][1] = 1;
       }else if(char == 6){
        arr[2][2] = 1;
       }
       
    }
    
    let rajYogCount = 0;
    if((arr[0][0] + arr[1][1] + arr[2][2]) == 3 ){
        rajYogCount++;
    }
    if((arr[0][1] + arr[1][1] + arr[2][1]) == 3 ){
        rajYogCount++;
    }
    if((arr[0][2] + arr[1][1] + arr[2][0]) == 3 ){
        rajYogCount++;
    }
    console.log(rajYogCount);

    let percentage = 0;
    if(rajYogCount == 0){
        percentage = 5 + (10 * Math.random());
    }else if(rajYogCount  == 1){
         percentage = 40 + ( 10 * Math.random());
    }else  if(rajYogCount  ==  2){
         percentage = 75+ ( 10 * Math.random());
    }else if(rajYogCount  == 3){
         percentage = 90 + ( 10 * Math.random());
    }
    
   
   
    return percentage;
}

let result = matrixCalc(date1 , month1  , year1 , dateSum , monthSum2 , yearSum2);
let finalResult = Math.floor(result);

console.log(`the chances of you getting successful is ${finalResult}% , But keep Hustling!!`);


