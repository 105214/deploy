import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router'
import ProductList from './ProductList'
function Home() {
  return (
    <div>
     <h1>Home</h1>
     <ProductList/>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to='/product'>    <Button variant="primary">view</Button></Link>
     <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
    </div>
  )
}

export default Home
