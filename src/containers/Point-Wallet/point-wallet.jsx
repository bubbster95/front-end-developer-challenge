import "./point-wallet.scss";

function PointWallet({ wallet }) {
  let numArray = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="point-wallet-wrapper">
      <div className="ratio">
        <div className="spent-wrapper">
          {numArray.map((num) => {
            return (
              <p
                style={{
                  // This function decides what number to display, allows for counter animation
                  transform: `translateY(-${
                    wallet.spent * 77 - (num > 4 ? 2 : 0)
                  }px)`,
                }}
                className={`spent ${num === wallet.spent && "spent-active"}`}
              >{`${num}`}</p>
            );
          })}
        </div>
        <p className="total">{`/ ${wallet.total}`}</p>
      </div>
      <h3>Points Spent</h3>
    </div>
  );
}

export default PointWallet;
