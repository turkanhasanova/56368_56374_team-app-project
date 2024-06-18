import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BlogCard = ({blogimage,blogtitle,text,blogid}) => {
  return (
    <Col sm={12} md={4}>
    <div className='blogcard'>
        <div className='image'>
            <img src={blogimage} alt="" width={340}/>
        </div>
        <div className='text mt-4'>
            <p>{blogtitle}</p>
            <Link to={`/blogdetails/${blogid}`}></Link>
        </div>
    </div>
    </Col>
  )
}

export default BlogCard