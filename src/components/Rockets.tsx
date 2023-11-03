import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react'
import { getDataRockets } from '../redux/features/DataRocketsSlice';
import { AppDispatch } from '../redux/store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
    <Container fluid> 
      <Row className="justify-content-center p-1"> 
        {loading ? <h2>Loading...</h2> :
        rockets.map(rocket => {        
        return(
          <Col className='d-flex justify-content-center'>
            <Card 
              style={{ width: '16rem' }} 
              className='my-3'
              bg = {'dark'}
              text={'light'}
            >
              <Card.Img 
                variant="top" 
                src={rocket.image} 
                style={{ height: '16rem' }} 
                className='object-fit-cover' 
              />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className='fs-2 fw-bolder'>
                  {rocket.name}
                </Card.Title>
                <Card.Text className='text-center d-flex flex-grow-1'>
                  {rocket.description}
                </Card.Text>
                <Button 
                  variant = 'primary'
                >
                  Reserve Rocket
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )})
        }
      </Row>    
    </Container> 
  )
}

export default Rockets