import toast from "react-simple-toasts";
import "react-simple-toasts/dist/style.css";
import "./App.css";

function App() {
  return (
    <div>
      <button type="button" onClick={() => toast("Hello World")}>
        show toast
      </button>
    </div>
  );
}

export default App;
