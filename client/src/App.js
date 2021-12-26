import './App.css';
import BoardContainer from './components/BoardComponents/BoardContainer';
import LeaderBoardContainer from './components/LeaderBoard/LeaderBoardContainer';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MatchHistorySearch from './components/MatchHistory/MathHistorySearch';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/' >
            <BoardContainer></BoardContainer>
          </Route>
          <Route exact path = '/leader-board' >
            <LeaderBoardContainer></LeaderBoardContainer>
          </Route>
          <Route exact path = '/match-history' >
            <MatchHistorySearch></MatchHistorySearch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
