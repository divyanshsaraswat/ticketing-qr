'use client'
import { useState,useCallback } from "react";
import { QRCode } from 'react-qrcode-logo';
import NavBtns from "@/components/controls";


export default function Home(){
  const [text,settext] = useState<any>([]);
  function Canvas() {
    return (
      <div id="canvascontainer" className="  flex flex-row gap-5 justify-center items-center " style={{minWidth:"70%",width:"70%",maxWidth:"70%"}}>
        {text.map((inst:any)=>{
          return (
            <div className="flex flex-col items-center">
              <a href={`${text}.png`} download={`${text}.png`}>
              <QRCode fgColor="white" bgColor="black" value={inst}  />
              </a>
              <div className="text-center" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100px"}}>{inst}</div>
            </div>
          )
        })}
     
     </div>
    );
  }
  function Controls(){
    const [inputtext,setinputtext] = useState<String>('');
    return(
      <div className="flex flex-row justify-around items-center mt-5 " style={{minWidth:"70%",width:"70%",maxWidth:"70%"}}>
      <input className="p-2 text-white bg-black" placeholder="Enter a text or a link" type="text" style={{minWidth:"60%"}} onChange={(e)=>{setinputtext(e.target.value)}}/>
      <button className="p-2" style={{background:"red",borderRadius:"5px"}} onClick={()=>{
        settext([...text,inputtext]);
        
      }}>Submit</button>
      </div>
    )
  }
  return(
    <>
    <NavBtns/>
    <Controls/>
    <Canvas/>
    </>
  )
}
