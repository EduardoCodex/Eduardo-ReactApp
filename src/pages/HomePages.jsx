import React from 'react'
import "./HomePages.css"
import ItemLisContainer from '../components/ItemsListContainer/ItemsListContainer'

function HomePages() {
  return (
      <div className='title-principal'>
            <h1>TIENDA VIRTUAL</h1>
            <ItemLisContainer />
      </div>
  )
}

export default HomePages