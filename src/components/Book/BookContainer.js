import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {actions} from "../redux/bookReducer";
import style from "./BookPage.module.css";
import {BookBits} from "./BookBits/BookBits";
import {BookAsks} from "./BookAsks/BookAsks";
import {Preloader} from "../Preloader/Preloader";


export const BookContainer = () => {

    //Parameters for websocket
    let msg = JSON.stringify({
        event: 'subscribe',
        channel: 'book',
        symbol: 'tBTCUSD'
    })

    const [wsChannel, setWsChannel] = useState();
    const [isFetching, setIsFetching] = useState(true)

    const dispatch = useDispatch();

    useEffect(() => {
        const createChanel = () => {
            let socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
            socket.onopen = (event) => {
                socket.send(msg)
            }
            setWsChannel(socket)
        }
        createChanel()
    }, [])

    useEffect(() => {
        if (wsChannel) {
            wsChannel.onmessage = (event) => {
                let data = JSON.parse(event.data)
                let itemsFromData = data[1]
                if (Array.isArray(itemsFromData)) {
                    if (itemsFromData.length === 50) {
                        createItemsBook(itemsFromData)
                        setIsFetching(false)
                    } else if ((itemsFromData.length === 3)) {
                        updateItemsBook(itemsFromData)
                    }
                }
            };
        }
    }, [wsChannel])

    const createItemsBook = (items) => {
        dispatch(actions.addItems(items))
        dispatch(actions.addTotal())
    }

    const updateItemsBook = (item) => {
        dispatch(actions.updateItems(item))
        dispatch(actions.addTotal())
    }

    const Book = () => {
        return(
            <div className={style.bookBody}>
                <BookBits/>
                <BookAsks/>
            </div>
        )
    }


    return (
        <div  className={style.tableBody}>
            {isFetching ? <Preloader/> : <Book/>}
        </div>

    )
}