import './App.css'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import Accueil from './components/pages/Accueil';
import Enigme from './components/pages/Enigme';

function App() {
  const browserList = [
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "/enigme/:enigmeId",
      element: <Enigme />,
    },
  ]
  const router = createBrowserRouter(browserList);


  return (
    <div className="App">
      <h1>Noctart</h1>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
