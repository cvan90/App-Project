import {useEffect} from "react"

function Home(){


  useEffect(()=>{

  console.log("---Home Page Loaded---")

},[])


function btnclick(){
    let msgText="---Item Added to List---"
    console.log(msgText)
}
      return (
        <>
        <br></br>
        <div>
          <header>
            <h2>To-Do List</h2>
            </header>
        </div>
        <br></br>
    <div>
      <input type="text" placeholder="Enter Text to Search "></input>
    <button onClick={btnclick}>Add</button>
    <p>
        <a>All</a> {" | "}
        <a>Complete</a> {" | "}
        <a>Incomplete</a> 
    </p>
    </div>
    <div>
    
    </div>
    <div>
      <footer>Footer @ 2025</footer>
    </div>
        </>
      );
    }
    
    export default Home;