import React from "react";
import style from "./BookAsks.module.css";
import {useSelector} from "react-redux";
import {getAsks, getMaxTotal} from "../../Selectors/Selectors";

export const BookAsks = () => {

    const bookAsks = useSelector(getAsks)
    const maxTotal = useSelector(getMaxTotal)

    return (
        <div className={style.asks}>
            <div className={style.asksTitleLine}>
                <div className={style.priceRow}>price</div>
                <div className={style.totalRow}>total</div>
                <div className={style.amountRow}>amount</div>
                <div className={style.countRow}>count</div>
            </div>
            {bookAsks.slice(0, 20).map((bookAsks) =>
                <div>
                    <div className={style.asksItemLine}>
                        <div className={style.priceRow}>{bookAsks[0].toLocaleString("en-GB")}</div>
                        <div className={style.totalRow}>{bookAsks[3]?.toFixed(5)}</div>
                        <div className={style.amountRow}>{Math.abs(bookAsks[2])}</div>
                        <div className={style.countRow}>{bookAsks[1]}</div>
                    </div>
                    <div style={{width: `${bookAsks[3] / maxTotal * 100}%`}} className={style.stripBody}> 0</div>
                </div>
            )}
        </div>
    )
}