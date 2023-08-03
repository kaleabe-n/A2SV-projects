import './bootstrap.min.css'
import './App.css';
import { useState,useRef,useEffect } from 'react';

function App() {
  //this is the diclaration for the counter state
  let [num,setNum] = useState(0)

  //the ref objects for the buttons for the increase button and the decrease button
  let increaseButtonRef = useRef<HTMLButtonElement>(null)
  let decreaseButtonRef = useRef<HTMLButtonElement>(null)


  //attach the event handler to the decrease button on the renders other than the first one
  if(decreaseButtonRef.current!=null){
    decreaseButtonRef.current!.onclick = ((e)=>{
      e.preventDefault()
      setNum(num-1)
    })
  }

  //attach the event handler to the increase button on the renders other than the first one
  if(increaseButtonRef.current!=null){
    increaseButtonRef.current!.onclick = ((e)=>{
      e.preventDefault()
      setNum(num+1)
    })
  }

  //attach the event handler to both buttons on the first render
  useEffect(()=>{
    if(decreaseButtonRef.current!=null){
      decreaseButtonRef.current!.onclick = ((e)=>{
        e.preventDefault()
        setNum(num-1)
      })
    }
  
    if(increaseButtonRef.current!=null){
      increaseButtonRef.current!.onclick = ((e)=>{
        e.preventDefault()
        setNum(num+1)
      })
    }
  

  },[])
  
  //useEffect to update the title of the document
  useEffect(()=>{
    document.title = "count "+num
  })
  return (
    <div className="App">
      <header className="bg-primary d-flex justify-content-center p-3">
        <h1 className='text-light'>counter</h1>
      </header>
      <main>
        <p className="counter m-5 display-5">counter value is  {num}</p>
      </main>
      <footer>
        <div>
          <button ref={increaseButtonRef} className='btn btn-info m-5'>increase</button>
          <button ref={decreaseButtonRef} className='btn btn-info m-5'>decrease</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
