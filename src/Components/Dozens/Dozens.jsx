import React, { useEffect, useState } from 'react'
import './Dozens.css'

const Dozens = ({lottery, handleGamesMade}) => {
    const [dozens, setDozens] = useState([])
    const [dozensChange, setDozensChange] = useState([])
    const [volante, setVolante] = useState(0)
    const [rangeNumber, setRangeNumber] = useState(0)


    const dozensGenerator = () => {
        const array = []

        for (let index = 1; index <= changeDozens(); index++) {
            array.push(index)
        }
        
        setDozens(array)
    }
    
    const changeDozens = () => {
        if(lottery == 'Lotofácil'){
            console.log(lottery)
            setVolante(25)
            setRangeNumber(15)
            return 25
        }

        if(lottery == 'Megasena'){
            setVolante(60)
            setRangeNumber(6)

            return 60
        }

        
    }

    const handleChangeDozen = (dozen) => {
        const result = dozensChange.findIndex( (item, index) => item == dozen)

        if(result == -1){
            if(dozensChange.length < rangeNumber){
                setDozensChange([...dozensChange, dozen])
            }
        } else {
            const copy = [...dozensChange]
            copy.splice(result, 1)
            setDozensChange(copy)
        }
    }

    useEffect(() => {    
        dozensGenerator()    
    },[])

  return (
    <>
        <div className='dozens'>
            { dozens &&
                dozens.map((dozen,i) => (
                    <button className={`dozen ${dozensChange.includes(dozen) ? 'include' : ''}`} key={i} onClick={ (e) => handleChangeDozen(dozen)} >{dozen}</button>
                ))
            }
        </div>

        <button onClick={() => handleGamesMade(dozensChange)} className='btn_incluir'>incluir</button>
    </>
  )
}

export default Dozens