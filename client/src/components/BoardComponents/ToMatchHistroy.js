import { useHistory } from 'react-router-dom';

const ToMatchHistory = () => {
  const history = useHistory();
  const handleClick = () => history.push('/match-history');
  
  return (
    <button type="button" onClick={handleClick}>
      Navigate to Match History
    </button>
  );
};

export default ToMatchHistory;