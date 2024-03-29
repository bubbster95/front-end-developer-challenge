import './point-wallet.scss';


function PointWallet({wallet}) {
  return (
    <div className="point-wallet-wrapper">
        <div className='ratio'>{`${wallet.spent} / ${wallet.total}`}</div>
        <h3>Points Spent</h3>
    </div>
  );
}

export default PointWallet;