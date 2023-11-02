import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react'
import { getDataRockets } from '../redux/features/DataRocketsSlice';
import { AppDispatch } from '../redux/store';

function Rockets() {

  const dispatch: AppDispatch = useDispatch()
  const loading = useSelector((state: RootState) => state.rockets.loading)
  const rockets = useSelector((state: RootState) => state.rockets.data)

  useEffect(() => {
    if(rockets.length === 0){
      dispatch(getDataRockets())
    }
  },[])
  

  return (
    <div className="d-flex justify-content-center flex-column flex-md-row align-items-center" >   
      {loading ? <h2>Loading...</h2> :
      rockets.map(rocket => {        
        return(
      <Card 
        style={{ width: '18rem' }} 
        className='my-2 mx-3 wrapper' 
        bg = {'dark'}
        text={'light'}
      >
        <Card.Img variant="top" src={rocket.image} height={'200rem'} />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className='fs-2 fw-bolder'>
            {rocket.name}
          </Card.Title>
          <Card.Text className='text-center text-dark'>
            {'RESERVED'}
          </Card.Text>
          <Card.Text className='text-center txtdescription'>
            {rocket.description}
          </Card.Text>
          <Button 
            variant = 'primary'
          >
            Reserve Rocket
          </Button>
        </Card.Body>
      </Card>
      )})
  }
      
    </div>
  )
}

export default Rockets