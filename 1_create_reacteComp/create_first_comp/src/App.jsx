// import KgButton from "./KgButton";
import Hello from "./Hello";

function App() {
    let random = Math.random() * 100
    return <div>
         <h1>
            This is the first react page {Math.round(random)}
        </h1>
        <Hello/>
    </div>
}

export default App;