import './css/style.css'
import BookList from './Component/BookList';
import HomePage from './Component/HomePage';
// import HomePage from './Component/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (

    <>
      <Router>
        <Switch>
          {/* <BookList/> */}
          <Route exact path="/"><HomePage/> </Route>
          <Route exact path="/home"><HomePage/> </Route>
          <Route exact path="/bookList"><BookList/> </Route>           
        </Switch></Router>

    </>


  );
}

export default App;
