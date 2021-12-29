import { useHistory } from 'react-router-dom';

const ToLeaderBoard = () => {
  const history = useHistory();
  const handleClick = () => history.push('/leader-board');
  
  return (
    <button type="button" className = 'navButton' onClick={handleClick}>
      Leaderboard
    </button>
  );
};

export default ToLeaderBoard;