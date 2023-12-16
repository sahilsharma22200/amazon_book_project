import react from "react";
import Book from "./Book";

const books = [
  {
    image:"https://m.media-amazon.com/images/I/512-CSPb6ZL.jpg",
    title:"Interesting facts for Curious minds",
    author:"JK Rowling",
    id:1,
  },

  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RkxLBPsYvcLrsAov-Q_cnjiB1Lq5P31tUuRrsJs&s",
    title:"Mind of a Leader",
    author:"Ravindra Nayyar",
    id:2,
  }
]
 
 

function BookLists() {
    return (
      <react.Fragment>
      <h1>amazon best seller</h1>
      <section className="BookList">
      {books.map((book ,index)=>{
        //const {image,title,author,id} = book      // destructuring the object.. Alternate way below
        return(
        <Book {...book} key={book.id} number={index} /> 
        )
      })} 
      </section>
      </react.Fragment>
    )
  }
  
  export default BookLists;