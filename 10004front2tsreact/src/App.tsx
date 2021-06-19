import React from 'react';

import {useAppDispatch, useAppSelector} from './store/hooks'
import {decremented1, get1, incremented1} from './store/state1'

import './App.css';
import IdB from "./dto/IdB";

function App() {
    const count = useAppSelector(s => s.state1.value1)
    const idV = useAppSelector(s => s.state1.idV)
    const dispatch = useAppDispatch()

    return (
        <div className="App">
            <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(incremented1())}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decremented1())}
                    >
                        Decrement
                    </button>
                </div>
            </div>
            ----
            <br/>
            <div>
                {idV?.map((v: IdB, k) => {
                    return (<div key={k}>{v?.vOne}</div>)
                })}
            </div>
            <button
                aria-label="Decrement value"
                onClick={() => get1(dispatch)}
            >
                get1
            </button>
        </div>
    );
}

export default App;
