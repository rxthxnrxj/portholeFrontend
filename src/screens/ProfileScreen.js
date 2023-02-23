import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { updatePothole } from '../actions/potholeActions'
import Loader from '../components/Loader'


function ProfileScreen() {

  const dispatch=useDispatch()

  const updatePotholeRed = useSelector((state) => state.updatePotholeRed);
  const { loading, error } = updatePotholeRed;


  const eventHandler=(e)=>{
    e.preventDefault();
    console.log("entered")
    dispatch(updatePothole())
  }

  return (
    <div>
      <h4 className='text-capitalize'>Admin Screen</h4>
      <Row>
        <Col>
          <Button variant='info' onClick={eventHandler}>Update Database</Button>
          {loading && (
            <Loader/>
          )}
        </Col>
      </Row>
    </div>
  
  )
}

export default ProfileScreen