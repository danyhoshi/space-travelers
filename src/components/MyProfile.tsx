import { Container } from "react-bootstrap"


function MyProfile() {
  return (
    <Container style={{marginTop: '4rem'}} className="d-flex flex-row">
      <div className="d-flex flex-column container-sm text-center" >
        <h2>My Missions</h2>
      </div>
      <div className="d-flex flex-column container-sm text-center" >
        <h2>My Rockets</h2>
      </div>
      <div className="d-flex flex-column container-sm text-center" >
        <h2>My Dragons</h2>
      </div>
    </Container>
  )
}

export default MyProfile