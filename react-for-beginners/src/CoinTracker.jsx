import { useState, useEffect } from 'react';

export default function CoinTracker() {
    const [ loading, setLoading ] = useState(true);
    const [ coins, setCoins ] = useState([]);


    function getData() {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then(res => res.json())
        .then(json => {
            setCoins(json);
            setLoading(false);
        });
    }
    useEffect(getData, []);

    return (
        <div>
            <h1>Cointracker {loading ? null : `(${coins.length})`}</h1>
            
            {loading && <strong>Loading ...</strong>}
            {/* loading 값이 true면 Loading... 문자열 나타나고 false면 안 나타나게하기 */}
            <ul>
                {coins.map(item =>
                    <li key={item.id}>{item.name}({item.symbol}):
                    ${(item.quotes.USD.price).toFixed(2)} USD</li>
                )
                }
            </ul>
        </div>
    );
}