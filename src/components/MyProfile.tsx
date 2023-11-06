import { Container } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { datamission } from "../redux/features/DataMissionsSlice";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyProfile() {
  const missions = useSelector((state: RootState) => state.missions.datamissions)
  const joindesMissions = missions.filter((mission: datamission) => mission.join)
  return (
    <Container style={{marginTop: '4rem'}} fluid='xl'>
      <Row>
        <Col className='d-flex flex-column justify-content-center align-items-center'>
          <h2 className ="text-center">My Missions</h2>
          {
            joindesMissions.map((mission: datamission) => {
              return (
                  <Card key={ mission.id } body bg='dark' border="primary" className ="text-center text-light fw-bold fs-5" style={{width: '12rem', marginBottom: '5px', borderWidth: '3px'}}>{mission.name }</Card>
            )})
          }
      </Col>
      <Col>
        <h2 className ="text-center">My Rockets</h2>
      </Col>
      <Col>
        <h2 className ="text-center">My Dragons</h2>
      </Col>
    </Row>
  </Container>
  )
}

export default MyProfile