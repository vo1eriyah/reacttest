import React from 'react'
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import style from './Wallet.scss'

class Wallet extends React.Component {
    constructor (Wallet) {
        super (Wallet);
    }

    render (props) {
        return (
            <div className="Grid-cell aside aside-2">
            <div className="Wallet">
                <h4> Wallet🤓</h4>
                <span className="btc_address">1BvBMSEYst...g7xJaNVN2</span>
                <span className="balance">512.34 BTC</span>
                <span className="balance_usd">≈780 882 USD</span>
                <span className="topup_block"><SecondaryButton caption="Top Up Wallet"/></span>
            </div>
            </div>
        );
    }
}

export default Wallet