import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function Rockets() {
  return (
    <div className="d-flex flex-column align-items-center">   
      <Card style={{ width: '18rem' }} className='my-2'>
        <Card.Img variant="top" src='' />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>
            Rocket name
          </Card.Title>
          <Card.Text className='text-center'>
            Rocket Description
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