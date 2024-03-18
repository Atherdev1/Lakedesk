import React from 'react'
import './style.css'

const SearchBar = () => {
  return (
        <>
            <div className="searchbar_container">
                <input type="text" placeholder='Your Email Address' />
                <button className="subscribe">Subscribe</button>
            </div>
        </>
  )
}

export default SearchBar
  