import { Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <div>
      안녕
      <Navigation />
      <Route path={"/"} exact={true} component={ListPage} />
      <Route path={"/write"} component={WritePage} />
    </div>
  );
}

export default App;
