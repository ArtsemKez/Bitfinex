let initialState = {
    bids: [],
    asks: [],
    maxTotal: 0
}

const bookReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'CREATE_ITEMS':
            return {
                ...state,
                bids: actions.items.filter(((item) => {
                    return item[2] > 0;
                })),
                asks: actions.items.filter(((item) => {
                    return item[2] < 0;
                })),
            }
        case 'ADD_TOTAL':
            let currentTotal = 0
            let bids = state.bids
            let asks = state.asks
            let maxTotal

            bids.forEach((order, id, bids) => {
                currentTotal = order[2] + currentTotal
                bids[id].push(currentTotal)
                return order
            })

            currentTotal = 0
            asks.forEach((order, id, asks) => {
                currentTotal = order[2] + currentTotal
                asks[id].push(Math.abs(currentTotal))
                return order
            })

            if (bids[23]?.[3] > asks[23]?.[3]) {
                maxTotal = bids[23]?.[3]
            } else if (bids[23]?.[3] < asks[23]?.[3]) {
                maxTotal = asks[23]?.[3]
            }

            return {...state, bids: [...bids], asks: [...asks], maxTotal: maxTotal}
        case 'UPDATE_ITEMS':
            let bidsUpdateItemsCase = state.bids
            let asksUpdateItemsCase = state.asks
            let indexBids = bidsUpdateItemsCase.findIndex(i => i[0] === actions.newItem[0])
            let indexAsks = asksUpdateItemsCase.findIndex(i => i[0] === actions.newItem[0])

            const deleteItem = () => {
                if (actions.newItem[2] > 0) {
                    if (indexBids !== -1) {
                        bidsUpdateItemsCase.splice(indexBids, 1)
                    }
                } else if (actions.newItem[2] < 0) {
                    if (indexAsks !== -1) {
                        asksUpdateItemsCase.splice(indexAsks, 1)
                    }
                }
            }

            const updateItems = () => {
                if (actions.newItem[2] > 0) {
                    if (indexBids !== -1) {
                        bidsUpdateItemsCase.splice(indexBids, 1, actions.newItem)
                    } else if (indexBids === -1) {
                        bidsUpdateItemsCase.push(actions.newItem)
                        bidsUpdateItemsCase.sort((a, b) => {
                            return (b[0]) - (a[0]);
                        })
                    }
                } else if (actions.newItem[2] < 0) {
                    if (indexAsks !== -1) {
                        asksUpdateItemsCase.splice(indexAsks, 1, actions.newItem)
                    } else if (indexAsks === -1) {
                        asksUpdateItemsCase.push(actions.newItem)
                        asksUpdateItemsCase.sort((a, b) => {
                            return (a[0]) - (b[0]);
                        })
                    }
                }
            }

            if (actions.newItem[1] === 0) {
                deleteItem(actions.newItem)
            } else if (actions.newItem[1] > 0) {
                updateItems(actions.newItem)
            }

            return {...state, bids: [...bidsUpdateItemsCase], asks: [...asksUpdateItemsCase]}
        default:
            return state
    }
}

export const actions = {
    addItems: (items) => ({type: 'CREATE_ITEMS', items}),
    addTotal: () => ({type: 'ADD_TOTAL'}),
    updateItems: (newItem) => ({type: 'UPDATE_ITEMS', newItem})
}

export default bookReducer