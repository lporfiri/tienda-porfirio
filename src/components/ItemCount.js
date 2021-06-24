import React, { useState } from "react"

function ItemCount({ stock, onAdd, initial }) {

    let [count, setCount] = useState(initial)

    const addCount = () => {
        if (stock > 1 && count <= stock) {
            setCount(++count)
        }
    }

    const resCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button type='button' className='btn btn-light' onClick={addCount}>+</button>
            <button className="btn btn-secondary btn-lg" disable>
                {count}
            </button>
            <button type='button' className='btn btn-light' onClick={resCount}>-</button>

            <button type='button' className='btn btn-light' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
