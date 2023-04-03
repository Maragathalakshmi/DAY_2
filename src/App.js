import './App.css';
function App() {
    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor:"olivegreen"}}>
                <h1 style={{ color: "black", fontFamily: "cursive" }} >Let we see the output of JAVASCRIPT</h1>
                <button onClick={window['alertMsg']}  style={{color:"black",fontFamily:"cursive"}}>Click here</button>
            </header>
        </div>
    );
}
export default App;