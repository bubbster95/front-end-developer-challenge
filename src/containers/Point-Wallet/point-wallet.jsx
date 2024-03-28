import './point-wallet.scss';


function PointWallet() {
    let spent = 3;
    let total = 6
  return (
    <div className="point-wallet-wrapper">
        <div className='ratio'>{`${spent} / ${total}`}</div>
        <h3>Points Spent</h3>
    </div>
  );
}

export default PointWallet;