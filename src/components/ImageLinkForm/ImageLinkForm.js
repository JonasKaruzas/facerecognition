import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
   return (
    <div>
        <p className='f3'>
            {'This app will detect faces in your pictures'}
        </p>
        <div>
            <div className='pa4 br3 shadow-3 bg'>
                <input className='f4 pa2 w-70 center' type='text' />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-red' >Detect</button>
            </div>
        </div>
    </div>
   )
}

export default ImageLinkForm;