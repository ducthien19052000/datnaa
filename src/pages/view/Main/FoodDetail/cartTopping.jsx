import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const CartTopping = ({handleAddTopping,record,showButton}) => {
    return (
        <div>
             <Button onClick={() => handleAddTopping(record)} disabled={showButton}>+</Button>
        </div>
    )
}

CartTopping.propTypes = {

}

export default CartTopping
