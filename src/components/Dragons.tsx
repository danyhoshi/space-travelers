import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { AppDispatch } from '../redux/store';
import { setSelectedDragon } from '../redux/features/DataDragonsSlice';
import loadingSVG from '../assets/loading.svg'
import { data } from '../redux/features/DataDragonsSlice';

const Dragons = () => {
      
  const dispatch: AppDispatch = useDispatch()
  const dragons = useSelector((state: RootState) => state.dragons.data)
  const loading = useSelector((state: RootState) => state.dragons.loading)

  const handleClick = (id: string) => {
    dispatch(setSelectedDragon(id))
  }


  return (
    <Container style={{marginTop: '4rem'}}> 
      <Row className="justify-content-md-center"> 
        {loading ? <img src={loadingSVG} width={'200rem'} height={'200rem'} className='my-5 rounded mx-auto d-block' alt = 'loading-svg'/> :  
        dragons.map((dragon: data) => {
          return (
            <Col className='d-flex justify-content-center' key = { dragon.id }>
                <Card 
                  style={{ width: '23rem', height: '50rem'}} 
                  className='my-2 mx-3 position-relative' 
                  bg = {'dark'}
                  text={'light'}
                >
                <Card.Img className='image' variant="top" src={ dragon.image }   />
                <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className='fs-2 fw-bolder'>
                  { dragon.name }
                </Card.Title>
                <Card.Text  style={{ width: '100%', height: '23rem'}} className='text-center'>
                  {!dragon.selected ? dragon.description : <><Badge style={{fontSize: "1rem"}} className='primary'>RESERVED</Badge> {dragon.description}</>} 
                </Card.Text>
                <Button 
                  onClick={() => handleClick(dragon.id)}
                  variant={!dragon.selected ? "primary" : "danger"}
                >
                  {!dragon.selected ? 'Reserve Dragon' : 'Leave Dragon'}
                </Button>
                </Card.Body>
              </Card>
            </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default Dragons