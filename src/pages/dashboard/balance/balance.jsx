import "./layout.css";

const BalanceBoard = () => {
  return (
    <div className="balance-page">
      <div className="balance-container">
        <div className="balance">
          <h5>Your Points</h5>
          <h3>1000</h3>
          <button className="claim">Claim Rewards</button>
        </div>
        <div className="hourly">
          <h5>4-Hour Reward</h5>
          <p>Available Now</p>
          <button className="earn">Earn points</button>
        </div>
      </div>
    </div>
  );
};

export default BalanceBoard;
