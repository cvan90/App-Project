function Home(){

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
      <Footer title="footer" year={2025}></Footer>
    </div>
        </>
      );
    }
    
    export default Home;