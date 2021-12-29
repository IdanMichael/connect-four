import { useHistory } from 'react-router-dom';

const ToMatchHistory = () => {
  const history = useHistory();
  const handleClick = () => history.push('/match-history');
  
  return (
    <button type="button" className = 'navButton' onClick={handleClick}>
      Match History
    </button>
  );
};

export default ToMatchHistory;