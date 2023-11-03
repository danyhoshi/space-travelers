import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react'
import { AppDispatch } from '../redux/store';
import { getDataDragons } from '../redux/features/DataDragonsSlice';
import loadingSVG from '../assets/loading.svg'
import { data } from '../redux/features/DataDragonsSlice';
const Dragons = () => {
      
  const dispatch: AppDispatch = useDispatch()
  const dragons = useSelector((state: RootState) => state.dragons.data)
  const loading = useSelector((state: RootState) => state.dragons.loading)

  useEffect(() => {
      if(dragons.length === 0){
          dispatch(getDataDragons())
      } 
  },[])

      return (
      
        <Container style={{marginTop: '4rem'}}> 
             <Row className="justify-content-md-center"> 
        {loading ?    
          <img src = {loadingSVG} alt = 'loading-svg'/> :  
            dragons.map((dragon: data) => {
              return (
                <Col className='d-flex justify-content-center'>
                <Card 
                  style={{ width: '23rem', height: '50rem'}} 
                  className='my-2 mx-3 position-relative' 
                  bg = {'dark'}
                  text={'light'}
                  key = { dragon.id }
                >
                  <Card.Img className='image' variant="top" src={ dragon.image }   />
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className='fs-2 fw-bolder'>
                      { dragon.name }
                    </Card.Title>
                    <Card.Text className='text-center'>
                      {!dragon.selected ? dragon.description : <span><span className='reserved'>RESERVED</span>{dragon.description}</span>}
                    </Card.Text>
                    <Button 
                      id = { dragon.id }
                      variant = 'primary'
                      className = 'position-absolute bottom-0 start-50 translate-middle-x my-3'
                    >
                      Reserve Dragon
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