import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  return (
    <div className="main">
    <div className="container">
      <div style={{border:'1px solid yellow'}}>
      <h1 style={{textAlign:'center',color:'#C0C0C0',fontSize:'50px'}}>todos</h1>
      <p style={{textAlign:'center',color:'#C0C0C0',marginTop:'none',overflow:'auto'}}>Items will persist in the browser local storage</p>
      </div>
      <TodoInput/>
      <TodoList/>
    </div>
    </div>
  );
}

export default App;