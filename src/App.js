import StartHere from "./components/js/StartHere";
import Basics from "./components/js/Basics";
import Macronutrients from "./components/js/Macronutrients";
import Micronutrients from "./components/js/Micronutrients";
import TheCell from "./components/js/TheCell";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/basics">
              <Basics />
            </Route>
            <Route path="/">
              <div className="start-here-container">
                <div></div>
              </div>
              <div className="basics-container">
                <a href="/basics">The Basics of Nutritional Science</a>
              </div>
              <div className="macronutrients-container">
                <div>
                  <a href="/macronutrients">Macronutrients</a>
                </div>
              </div>
              <div className="micronutrients-container">
                <div>
                  <a href="/micronutrients">Micronutrients</a>
                </div>
              </div>
              <div className="the-cell-container">
                <div>
                  <a href="/thecell">The Cell</a>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
