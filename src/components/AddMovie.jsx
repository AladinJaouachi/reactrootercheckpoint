import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddMovie({AddMovieFunc}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    stream_name:"",
    descrip:"",
    rate:0 ,
    stream_img:"",


  }
  )


  return (
    <>
      <Button className='AddMovie' variant="primary" onClick={handleShow}>
       ADD film +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="Name"
                placeholder="Name Movie"
                autoFocus onChange={(event)=>setNewMovie({...newMovie,stream_name:event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="Name"
                placeholder="Description Movie"
                autoFocus onChange={(event)=>setNewMovie({...newMovie,descrip:event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="Name"
                placeholder="Rate Movie"
                autoFocus  onChange={(event)=>setNewMovie({...newMovie, rate:event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="Name"
                placeholder="Image Movie"
                autoFocus  onChange={(event)=>setNewMovie({...newMovie,stream_img:event.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={()=>{return( AddMovieFunc(newMovie) , handleClose() , setNewMovie({}))}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;