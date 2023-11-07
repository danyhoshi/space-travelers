import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AppDispatch } from '../redux/store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { setSelectedRocket } from '../redux/features/DataRocketsSlice';
import loadingSVG from '../assets/loading.svg'
import Badge from 'react-bootstrap/Badge';
import { useEffect } from 'react';
import { getDataRockets } from '../redux/features/DataRocketsSlice';

function Rockets() {

  const dispatch: AppDispatch = useDispatch()
  const loading = useSelector((state: RootState) => state.rockets.loading)
  const rockets = useSelector((state: RootState) => state.rockets.data)

  useEffect(() => {
    dispatch(getDataRockets())
  },[])
  
  const handleClick = (id: string) => {
    dispatch(setSelectedRocket(id))
  }

  return ( 
    <Container fluid='xl' className='mt-5'> 
      <Row className="justify-content-center p-1"> 
        {loading ? <img src={loadingSVG} width={'200rem'} height={'200rem'} className='my-5 rounded mx-auto d-block' alt = 'loading-svg'/> :
        rockets.map(rocket => {        
        return(
          <Col className='d-flex justify-content-center' key = { rocket.id }>
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
                  {!rocket.selected? rocket.description : <span><Badge bg="primary">Reserved</Badge> {rocket.description}</span>}
                </Card.Text>
                <Button 
                  variant = {!rocket.selected ? "primary" : 'danger'}
                  onClick={() => handleClick(rocket.id)}
                >
                  {!rocket.selected ? 'Reserve Rocket' : 'Cancel Reservation'}
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