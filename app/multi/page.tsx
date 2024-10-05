'use client'
import { useState,useCallback } from "react";
import { QRCode } from 'react-qrcode-logo';
import NavBtns from "@/components/controls";

export default function Multi(){
    const [text,settext] = useState<any>();
    const [submit,setsubmit] = useState<any>(false);
    const [total,settotal] = useState<number>();
    function Controls(){
        const [inputtext,setinputtext] = useState<String>('');
        return(
          <div className="flex flex-row justify-around items-center mt-5 " style={{minWidth:"70%",width:"70%",maxWidth:"70%"}}>
          <input className="p-2 text-white bg-black" placeholder="Enter Serial Code" type="text" style={{minWidth:"30%"}} onChange={(e)=>{setinputtext(e.target.value)}}/>
          {/* <input className="p-2 text-white bg-black" placeholder="No. of Codes" type="number" style={{minWidth:"30%"}} onChange={(e)=>{setinputtext(e.target.value)}}/> */}
          <button className="p-2" style={{background:"red",borderRadius:"5px"}} onClick={()=>{
            settext(inputtext);
            setsubmit(true);
            
          }}>Submit</button>
          </div>
        )
      }
  function CodePrint({text}:any){
    return(
        <>
         <a href={`${text}.png`} download={`${text}.svg`}>
         
         <QRCode value={text}  size={128}/>
        
         
         </a>
         <div className="flex flex-col gap-2 items-center">
         <div className="text-center" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100px"}}>{text}</div>
         <div><input type="checkbox" id="vehicle1" name="vehicle1" value={1}/></div>
         </div>
        </>
    )
  }
  function Canvas() {
    const series = Array.from({ length: 7100 - 7000 + 1 }, (_, index) => 7000 + index);
    return (
      <div id="canvascontainer" className="  flex flex-row gap-5 justify-center items-center " style={{minWidth:"70%",width:"70%",maxWidth:"70%"}}>
        <div className="flex flex-row flex-wrap gap-12 items-center">
             {submit?series.map((num)=>{
                let sum = text + num.toString()
                return <CodePrint text={sum}/>
             }):null}
             </div>
        
     
     </div>
    );

  }
    return(

    <>
    <NavBtns/>
    <Controls/>
    <Canvas/>
    </>
    )
}