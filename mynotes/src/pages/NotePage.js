import React, {useEffect, useState} from 'react'
import notes from '../assets/data'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';

const Notepage = ({ match }) => {
  let noteId = useParams().id

  
  
  console.log(noteId);

  let note = notes.find(note => note.id === Number(noteId))
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to='/' >
            <ArrowLeft />
          </Link>
        </h3>
      </div>
        <textarea value={note?.body}>
          
        </textarea>
    </div>
  )
}

export default Notepage
