import React from "react";
import {createSelector} from "reselect";

export const getMaxTotal = (state) => {
    return state.bookPage.maxTotal
}

export const getBidsSelector = (state) => {
    return state.bookPage.bids
}
export const getBids = createSelector(getBidsSelector, (bids) => {
    return bids
})

const getAsksSelector = (state) => {
    return state.bookPage.asks
}
export const getAsks = createSelector(getAsksSelector, (asks) => {
    return asks
})