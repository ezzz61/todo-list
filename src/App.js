import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Todos from "./components/Todos";
import CompleatedTodos from "./components/CompletedTodos";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/completed" component={CompleatedTodos} />
          <Route path="/active">
            <Todos active />
          </Route>
          <Route path="/" exact component={Todos} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
