// import { useEffect, useState} from "react";

// function useCurrenyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//          .then((res) => res.json())
//         .then((res) => setData(res[currency]))

//         console.log(data);
        
//     }, [currency])
//     // console.log(data);
//     // return data;

//     useEffect(() => {
//         console.log("Data updated:", data);
//     }, [data]);
    
//     return data;
// }

// export default useCurrenyInfo;

import { useEffect, useState } from "react";

function useCurrenyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        if (!currency) return; // Guard clause to ensure currency is defined

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                console.log("Data fetched:", res[currency]);
            })
            .catch((error) => console.error("Error fetching currency data:", error)); // Error handling
    }, [currency]);

    // Logging the updated data after it changes
    useEffect(() => {
        console.log("Data updated:", data);
    }, [data]);

    return data;
}

export default useCurrenyInfo;

