import React from "react";
import style from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={style.body}>
            <div className={style.bids}>
                <div className={style.titleBids}>
                    <div className={style.count}>count</div>
                    <div className={style.amountBids}>amount</div>
                    <div className={style.totalBids}>total</div>
                    <div className={style.priceBids}>price</div>
                </div>
                <div className={style.bidsLines}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={style.asks}>
                <div className={style.titleAsks}>
                    <div className={style.priceAsks}>price</div>
                    <div className={style.totalAsks}>total</div>
                    <div className={style.amountAsks}>amount</div>
                    <div className={style.count}>count</div>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}