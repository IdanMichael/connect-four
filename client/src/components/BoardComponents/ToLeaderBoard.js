import { useHistory } from 'react-router-dom';

const ToLeaderBoard = () => {
  const history = useHistory();
  const handleClick = () => history.push('/leader-board');
  
  return (
    <button type="button" onClick={handleClick}>
      Navigate to LeaderBoard
    </button>
  );
};

export default ToLeaderBoard;