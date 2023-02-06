import React, { useState } from 'react'
import iconInfo from '../images/icon_info.svg';

const Footer = () => {

    const [ showModal, setShowModal ] = useState(false)

    return (
        <footer className='app-footer'>

            {showModal && (
                <div className='footer-modal'>
                    <div className='footer-modal-container'>

                        <div className='footer-modal-header'>
                            <h3>Info about this app</h3>
                            <button onClick={() => setShowModal(false)} title="Close info window">&times;</button>
                        </div>

                        <div className='footer-modal-content'>
                            <p>This is a non-commercial video game UI development experimentation created with React.</p>
                            
                            <p>The user interface design, equipment info and almost all the image assets have been copied from the video game <a href="https://www.bungie.net/7/en/Destiny/NewLight" target="_blank" rel="noreferrer noopener">Destiny</a> and all of the aforementioned assets belong to video game company Bungie Inc.</p>
                            
                            <p>Project has no official or commercial affilitation with Bungie Inc. whatsoever.</p>
                            
                            <p><b>Techonolgies used:</b><br />React, ParallaxJS, React SASS</p>

                            <p><b>Aleksi Pitkänen</b>, 2023. <a href="https://github.com/allu1991" target="_blank" rel="noreferrer noopener">GitHub</a></p>


                            <button onClick={() => setShowModal(false)} title="Close info window">Close</button>

                        </div>
                        
                    </div>
                </div>
            )}

            <div className="footer-container">
                <button onClick={() => setShowModal(true)} title="Information about this app"><img src={iconInfo} alt="" /><p>Info</p></button>
            </div>

        </footer>
    )
}

export default Footer