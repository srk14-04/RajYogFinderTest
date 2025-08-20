"use client"

import { useState } from "react"
import { InputBox } from "./InputBox"


export const InputComponent = ()=>{

    const [date ,setDate] = useState("");
    const [month , setMonth] = useState("");
    const [year , setYear] = useState("");
    const [percentage , setPercentage] = useState(0);
            
    function sum( num : number){
        let total = 0;
        let  number = num;
        while(number > 0){
            const  rem = number % 10;
            total = total + rem;
            number = Math.floor(number / 10);// make it floor here
        };
        
    
        if(total > 9){
            let total2= 0;
            while(total>0){
                const  rem2 = total % 10;
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

    function yearMale(yearSum : number){
        const result =  11- yearSum;
        if(result == 10){
            return 1;
        }else{
            return result;
        }
    
    }

    function monthSummer(monthSum : number , dateSum : number , yearSum : number ){
        const result = monthSum + dateSum + yearSum;
        const month2 = sum(result);
        return month2;
    }

    function matrixCalc( num1 : number, num2:number , num3:number , dateSum :number, monthSum2 :number, yearSum2 : number ){
        const arr = [
            [0 , 0 , 0],
            [0 , 0 , 0],
            [0 , 0 , 0]
        ]
    
    
        const result = "" + num1 + num2 + num3 + dateSum + monthSum2 + yearSum2;
    
        for(const char of result){
           if(char == "4"){
            arr[0][0] = 1;
           }else if(char == '9'){
            arr[0][1] = 1;
           }else if(char == '2'){
            arr[0][2] = 1;
           }else if(char == '3'){
            arr[1][0] = 1;
           }else if(char == '5'){
            arr[1][1] = 1;
           }else if(char == '7'){
            arr[1][2] = 1;
           }else if(char == '8'){
            arr[2][0] = 1;
           }else if(char == '1'){
            arr[2][1] = 1;
           }else if(char == '6'){
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


    function RajYogCalc(date : number , month : number , year : number){
       
        
        
        const dateSum :number = sum(date);
        const monthSum  : number= sum(month);
        const yearSum : number = sum(year);
    
        
        // function yearFemale(yearSum : number){
        //     let result =  22- yearSum;
        //     let finalResult = 0;
        //     if(result > 9){
        //         finalResult = sum(result);
        //     }
        
        //     if(finalResult == 10){
        //         return 1;
        //     }else{
        //         return finalResult;
        //     }
        
        // }
        
        const monthSum2 = monthSummer(monthSum , dateSum , yearSum);
        
        // let yearSum2 = 0;
        
        const yearSum2 : number = yearMale(yearSum);
        
            
                //yearSum2 = yearFemale(yearSum);
        
        
        const percentage = matrixCalc(date , month , year , dateSum , monthSum2 , yearSum2);
        return percentage;
    }
    

    return ( <div>
    <div className="flex justify-center pt-35" >
            <div className="p-4"><InputBox onChange={(value) => {setDate(value)}} label="Date" placeholder="01" min={1} max={31}/></div> 
            <div className="p-4"> <InputBox onChange={(value) => {setMonth(value)}}  label="Month" placeholder="08" min={1} max={12}/></div>
            <div className="p-4"><InputBox onChange={(value) => {setYear(value)}} label="Year" placeholder="2005" min={1950} max={2030}/></div> 
            
        </div>
        
       <div className="flex justify-around pt-10 text-2xl">
                
                    <button className=" border-1 p-4 w-80 bg-gradient-to-tr from-amber-500 to-amber-200
                     text-gray-950 rounded-md cursor-pointer hover:opacity-90 active:scale-95 transition transform duration-150"
                    onClick={()=>{
                        const result = RajYogCalc(Number(date) , Number(month) ,Number(year))
                        setPercentage(result);
                        console.log(result);
                    }}
                    ><b>Submit</b></button>
                
       </div>
        <div className="flex justify-center pt-10 text-4xl ">
            The Percentage of you being Successful is {Math.floor(percentage)}%     , But always keep hustling
            
        </div>

        </div>
    )
}


