import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/style.css";
import "react-simple-toasts/dist/theme/dark.css";
import SlotCounter from "react-slot-counter";
import "./App.css";

toastConfig({
  theme: "dark",
});

function App() {
  return (
    <div className="container">
      <button
        type="button"
        className="button"
        onClick={() => toast("Hello World")}
      >
        show toastx
      </button>

      <div className="slot-container">
        <SlotCounter value={41223} />
      </div>
    </div>
  );
}

export default App;
