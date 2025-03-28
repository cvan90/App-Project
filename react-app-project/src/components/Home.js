import {useEffect, useState} from "react"

const temparary_todo_items=[
  {id:1,name:"item one", completed:false},
  {id:2,name:"item two", completed:false},
  {id:3,name:"item three", completed:true},
  {id:4,name:"item four", completed:false},
  {id:5,name:"item five", completed:false}
]

function Home(){

const [tmplist,setTmpList]=useState(temparary_todo_items);
const [todolist,setTodoList]=useState(null);

  useEffect(()=>{

  console.log("---Home Page Loaded---")
  
  setTodoList(tmplist)
  console.log("---Temparary list---\n",tmplist)
  console.log("---To-Do List---\n",todolist)

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
      <input type="text" placeholder="Enter Item to be Added "></input>
    <button onClick={btnclick}>Add</button>
    <p> Filter:&nbsp;&nbsp;
        <a>All</a> {" | "}
        <a>Complete</a> {" | "}
        <a>Incomplete</a> 
    </p>
    </div>
    <div>
            {todolist && todolist.map((item)=>
              <p key={item.id}>{
                <>
                   <input type="checkbox" checked={item.completed}/>
                    {" "}
                    <span>{item.name}</span>
                    {" "}
                   <button>x</button>
                </>}
              </p>)}
    </div>
    <div>
      <footer>Footer @ 2025</footer>
    </div>
        </>
      );
    }
    
    export default Home;