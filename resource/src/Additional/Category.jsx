import React from 'react'

const Category = ({title, category1,category2, category3, image}) => {
    return (
        <div className='category'>
            <div className='text my-2 mx-2'>
                <h5>{title}</h5>
                <h6>{category1}</h6>
                <h6>{category2}</h6>
                <h6>{category3}</h6>
            </div>
            <div className='image'>
                <img src={image} alt=""  width={200}/>
            </div>
        </div>
    )
}

export default Category