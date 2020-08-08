import React, { useState, setState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Rater from './MoviefilterRate'

function Movieadd(props) {
    const [show, setShow] = useState(false);
    const newmovie = {
        title: "",
        description: "",
        posterUrl: "",
        rating: ""
    }
    const [nemovie, setNemovie] = useState(newmovie)

    function getrate(str){
        nemovie.rating=str;
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const handleSave = () => {
    //     setShow(false);
    //     setNemovie(newmovie);
    //     props.handleChange(nemovie)
    // }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
        </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='text' placeholder='The title' onChange={(e) => { nemovie.title = e.target.value }}></input>
                    <input type='text' placeholder='Description' onChange={(e) => { nemovie.description = e.target.value }}></input>
                    <input type='text' placeholder='Poster Url' onChange={(e) => { nemovie.posterUrl = e.target.value }}></input>
                    <Rater handle={getrate}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={
                        () => {
                        setShow(false);
                        props.handleChange(nemovie)
                    }}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Movieadd;