function Home(){
function btnclick(){
    let msgText="---Button Pressed---"
    console.log(msgText)
}
      return (
        <>
        <div>
          <header>To-Do List</header>
        </div>
        <br></br>
    <div>
      <input type="text" placeholder="Enter Text to Search "></input>
    <button onClick={btnclick}>Add</button>
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