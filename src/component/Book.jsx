import React from 'react'


function Book(props) {
  const {image,title,author,number} = props 
  return (
    <article className='Book'>
    <img src={image} alt={title} />
    <h4>{title}</h4>
    <h3>{author}</h3>
    <span className='number'>{`#${number+1}`}</span>
    </article>
  )
}

export default Book