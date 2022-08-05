import React from 'react'
import { MdSend, MdChangeCircle, MdMoreHoriz, MdTimer} from 'react-icons/md'


const financeInfo = {
  accountNumber: '0123456701234567',
  balance: 1200.75,
  creditScore: '730',
  type: 'Checking'
}

function Balance() {
  return (
    <div className="balance-details">
      <div className="account-number">
        <div>Account Number:</div>
        <div>{financeInfo.accountNumber}</div>
      </div>
      <div className="balance">
        <h1><span>$</span>{financeInfo.balance}</h1>
        <h2>Account type: {financeInfo.type.toLocaleUpperCase()}</h2>
      </div>
      <div className="functionality">
        <div>
          <MdSend/>
          <div>Pay</div>
        </div>
        <div>
          <MdChangeCircle/>
          <div>Transfer</div>
        </div>
        <div>
          <MdMoreHoriz/>
          <div>More</div>
        </div>
      </div>
      <div className="transactions">
        <div className="top-row">
          <h4><MdTimer/> Recent Transactions</h4>
          <h4>View More</h4>
        </div>

        <div className="element">
          <div>
            <div>Recent Transaction</div>
            <div>Recent Transaction</div>
          </div>
          <div>
            <div>$20.21</div>
            <div>${financeInfo.balance}</div>
          </div>
        </div>
        <div className="element">
          <div>
            <div>Recent Transaction</div>
            <div>Recent Transaction</div>
          </div>
          <div>
            <div>-$15.46</div>
            <div>${financeInfo.balance-20.21}</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Balance
