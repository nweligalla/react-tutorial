import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet heroName="Batman" name="Bruce">
        <p>This is a children property</p>
      </Greet>
      <Greet heroName="Super" name="Clark">
        <button>click me</button>
      </Greet>
      <Greet heroName="Wonder Woman" name="Diana" />
      <Welcome heroName="Batman" name="Bruce" />
      <Welcome heroName="Superman" name="Clark" />
      <Welcome heroName="Wonder Woman" name="Diana" />
    </div>
  );
}

export default App;
