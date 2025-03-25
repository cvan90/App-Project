function Home(){
function btnclick(){
    let msgText="---Button Pressed---"
    console.log(msgText)
}
      return (
        <>
        <div>

        </div>
        <br></br>
        <div>
          <header>
            <h1>To-Do List</h1>
            </header>
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