import React from "react";
import style from './BookBits.module.css'
import {useSelector} from "react-redux";
import {getBids, getMaxTotal} from "../../Selectors/Selectors";

export const BookBits = () => {

    const bookBids = useSelector(getBids)
    const maxTotal = useSelector(getMaxTotal)

    return (
        <div className={style.bids}>
            <div key={Number.toString()} className={style.bidsTitleLine}>
                <div className={style.countRowTitle}>count</div>
                <div className={style.amountRowTitle}>amount</div>
                <div className={style.priceRowTotal}>total</div>
                <div className={style.priceRowTitle}>price</div>
            </div>
            {bookBids.slice(0, 20).map((bidsItem) =>
                <div>
                    <div className={style.bidsItemLine}>
                        <div className={style.countRow}>{bidsItem[1]}</div>
                        <div className={style.amountRow}>{bidsItem[2]}</div>
                        <div className={style.totalRow}>{bidsItem[3]?.toFixed(5)}</div>
                        <div className={style.priceRow}>{bidsItem[0].toLocaleString("en-GB")}</div>
                    </div>
                    <div style={{width: `${bidsItem[3] / maxTotal * 100}%`}} className={style.stripBody}> 0</div>
                </div>
            )}
        </div>
    )
}
