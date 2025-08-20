
import { InputComponent } from "./components/InputComponent";
import { Text } from "./components/Text";



export default function Home() {
  return (<div>
    <div className="flex justify-center pt-10 
    text-6xl font-bold bg-gradient-to-b from-gray-200
     to-indigo-950 bg-clip-text text-white-400 text-shadow-md text-shadow-sky-300"><b>WELCOME TO RAJYOG FINDER</b></div>

      <Text/>
      <InputComponent/>
    </div>
  );
} 
