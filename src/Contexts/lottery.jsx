import { createContext, useState } from "react";

export const LotteryContex = createContext({})

export const LotteryProvider = ({children}) => {
    const [lottery, setLottery] = useState(null)

    return (
        <LotteryContex.Provider value={{lottery,setLottery}}>
            {children}
        </LotteryContex.Provider>
    )
}