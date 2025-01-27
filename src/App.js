import { Suspense} from 'react'
import { RouterProvider } from "react-router-dom";
import router from "./router";
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div></div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
