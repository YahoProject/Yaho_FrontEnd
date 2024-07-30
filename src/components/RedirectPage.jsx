import { useEffect } from "react";
import useStore from "./store";

const RedirectPage=()=>{

  const setCode=useStore((state)=>state.setCode);


  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      setCode(code); 
    }
  }, [setCode]);


  return (
    <>
    <h1>로딩중입니다</h1>
    </>
  )
}

export default RedirectPage;