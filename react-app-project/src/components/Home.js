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
const [txtitem, setItem] = useState("")
const [msgText,setMsg] = useState("")


const btnclick= (e) =>{
  e.preventDefault();
    
    if(txtitem === null ||  txtitem.trim().length === 0)
    {
        setMsg(`---Please Enter a Valid item to be Added---`);
        return true;
    }
        const _newitem = {id:new Date().getTime(),name:txtitem,completed:false};

        setTmpList((prevval)=>{
            
            //modern javascript array add
            //-- spread operator ... = add item to array ... include exing items 
            //or array.push()
  
            const _lst = [...prevval,_newitem]
            setTodoList((prevval)=>[..._lst]);    
            return _lst;
        });
  setMsg("Item Added");
  setItem("");
}
function DeleteItem(e,id){

  e.preventDefault()

  if (!("delete item?")){
    return false;
    
  }
  
  setMsg(`--Item Deleted---${id}`)
}




  useEffect(()=>{

  console.log("---Home Page Loaded---")
  
  setTodoList(tmplist)
  console.log("---Temparary list---\n",tmplist)
  console.log("---To-Do List---\n",todolist)

},[])

      return (
        <>
        <br></br>
        <div className="app-center-page">
          <header>
            <h2>To-Do List</h2>
            </header>
        </div>
        <br></br>
    <div className="app-center-page">
      <input value={txtitem} type="text"
       onChange={(e)=>setItem(e.target.value)}
      placeholder="Enter Item to be Added "/>
      {" "}
    <button onClick={btnclick}>Add</button>{" "} <a>Clear</a>
    <p>{msgText}</p>
    <p> Filter:&nbsp;&nbsp;
        <a>All</a> {" | "}
        <a>Complete</a> {" | "}
        <a>Incomplete</a> 
    </p>
    </div>
    <div className="app-center-page">
            {todolist && todolist.map((item)=>
              <p key={item.id}>{
                <>
                   <input type="checkbox" checked={item.completed}/>
                    {" "}
                    <span>{item.name}</span>
                    {" "}
                   <button onClick={(e)=>DeleteItem(e,item.id)}>x</button>
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