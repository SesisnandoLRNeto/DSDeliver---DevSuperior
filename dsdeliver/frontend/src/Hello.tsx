import { useEffect } from "react";

type Props ={
    message: string
}
function Hello({ message }: Props){

    useEffect(()=>{
        //Chamada para API
      }, [])
      
    return(
        <h1>Hello {message}</h1>
    )
}

export default Hello;