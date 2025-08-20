export const InputBox = ({placeholder , onChange, label , min , max} : 
    {placeholder : string ; onChange :(value : string) => void ; label:string ; min:number ; max:number
     }) =>{
        return (
            <div  >
               <div className="text-2xl">
                 <label>{label}</label>
                </div>
               <div> <input className="w-[230px] p-[0.875rem] 
           text-base border-[1px] border-amber-400 
           rounded-md 
           outline-none transition ease-in-out
           duration-200 focus:shadow-[5.5px_7px_0_#d97706]" placeholder={placeholder} onChange={(e) => onChange(e.target.value)} 
           type="number" min={min} max={max}/></div>
            </div>
        )
}