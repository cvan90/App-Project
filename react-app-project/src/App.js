import Header from "./components/Header"

function App() {
const btnclick=() =>
{
  let msgText="---Button Pressed---"
  console.log(msgText)
}


  return (
    <>
    <div>
      <Header title="To-Do List"/>
    </div>
<div>
  <input type="text" placeholder="Enter Text to Search "></input>
<button onClick={btnclick}>Add</button>
</div>
<div>

</div>
<div>
  <p>
    footer @ 2025
  </p>
</div>
    </>
  );
}

export default App;
