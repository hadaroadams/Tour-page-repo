import { useEffect, useState } from "react";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project'
let num=0
function App() {
  const [loading,setLoading] = useState(false)
  const [tours, setTours] = useState([])
  num++
  const apiFetch = async () => {
    try{
      setLoading(false)
      const data = await fetch(url)
      const data2 = await data.json()
      console.log(num)
      setTours(data2)
      setLoading(true)
    }catch(error){
      console.log(error)
    }
  }
  console.log(tours)
  useEffect(()=>{apiFetch()},[])

  const removeTour=(id)=>{
    let tourLeft = tours.filter((item)=>{
      if(item.id!==id){
        return item
      }
    })
    setTours(tourLeft)
    console.log(tours) 

    }
  
  if(loading){

    if(tours.length==0){
    return(
      <div className="flex flex-col">
        <h1 className="text-center mt-10 text-5xl ">No Tours Left</h1>
        <button onClick={apiFetch} className="w-32 text-lg rounded-md mx-auto mt-10 bg-green-600 duration-150 hover:bg-green-700"  >Refresh</button>
      </div>
    )
  }
    return(
    <div className="bg-gray-50 ">
      <h1 className="text-center mt-10 text-5xl ">Our Tours</h1>
      <div className="w-24 h-1 bg-green-500 m-auto mt-3"></div>
      <div className=" md:grid md:grid-cols-2 flex flex-col items-center lg:grid-cols-3 md:items-start">
        {tours.map((item)=>{
          return (<Tours key={item.id} {...item} removeItem={()=>{removeTour(item.id)}} />)
        })}
      </div>
    </div>)
  }
  return(
    <div>
      <h1 className="text-center mt-10 text-5xl ">
        loading...
      </h1>
    </div>
  )
}

export default App;
