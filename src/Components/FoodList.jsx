import React from 'react'

const FoodList = () => {
  return (
    <>
        <div className="product-section">
            <h1>Products we have in stock</h1>
            <div className="search-product">
                <div className="search">
                  <input type="text" name='text' placeholder='search your product'/>
                </div>
                <div className="list">
                    <li>Vegetables</li>
                    <li>Dairy</li>
                    <li>Meat Fish</li>
                    <li>Fruits</li>
                    <li>Bakery</li>
                    <li>Honey & Oil</li>
                </div>
            </div>

           

        </div>
    </>
  )
}

export default FoodList