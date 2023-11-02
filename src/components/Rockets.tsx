import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sunimage from '../assets/sun.webp'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react'
import { getDataRockets } from '../redux/features/DataRocketsSlice';
import { AppDispatch } from '../redux/store';

function Rockets() {

  const dispatch: AppDispatch = useDispatch()

  const rockets = useSelector((state: RootState) => state.rockets.data)

  useEffect(() => {
    if(rockets.length === 0){
      dispatch(getDataRockets())
    }
  },[])
  

  return (
    <div style={{marginTop: '4rem'}} className="d-flex justify-content-center flex-column flex-md-row align-items-center" >   
      <Card 
        style={{ width: '18rem' }} 
        className='my-2 mx-3' 
        bg = {'dark'}
        text={'light'}
      >
        <Card.Img variant="top" src={sunimage}   />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className='fs-2 fw-bolder'>
            Rocket name
          </Card.Title>
          <Card.Text className='text-center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus enim sit dolorum voluptate quae facilis dignissimos fugiat architecto tenetur libero omnis minima distinctio expedita nam unde, maxime ut alias blanditiis.
          </Card.Text>
          <Button 
            variant = 'primary'
          >
            Reserve Rocket
          </Button>
        </Card.Body>
      </Card>

      <Card 
        style={{ width: '18rem' }} 
        className='my-2 mx-3' 
        bg = {'dark'}
        text={'light'}
      >
        <Card.Img variant="top" src={sunimage} />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className='fs-2 fw-bolder'>
            Rocket name
          </Card.Title>
          <Card.Text className='text-center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus enim sit dolorum voluptate quae facilis dignissimos fugiat architecto tenetur libero omnis minima distinctio expedita nam unde, maxime ut alias blanditiis.
          </Card.Text>
          <Button 
            variant = 'primary'
          >
            Reserve Rocket
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Rockets