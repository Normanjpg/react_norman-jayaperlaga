import React, { useState } from 'react'
import Article from './Article';

const HeaderToggle = () => {
    const [bahasa, setBahasa] = useState(false);

    const toggleBahasa = () => {
        setBahasa(!bahasa);
    }
    

  return (
    <div>
        <div>
            <h2>
                {bahasa ? Article.title.id : Article.title.en}
            </h2>
            <p>{bahasa ? Article.description.id : Article.description.en}</p>
        <button className='btn btn-primary btn-lg' onClick={toggleBahasa}>
            {bahasa ? "Ganti ke Bahasa Inggris" : "Switch to Indonesian"}

        </button>
        </div>
    </div>
  )
}

export default HeaderToggle