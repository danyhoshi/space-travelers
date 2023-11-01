import { Container } from "react-bootstrap"


function MyProfile() {
  return (
    <Container className="d-flex flex-row">
      <div className="d-flex flex-column container-sm" >
        <h2>My Missions</h2>
      </div>
      <div className="d-flex flex-column container-sm" >
        <h2>My Rockets</h2>
      </div>
      <div className="d-flex flex-column container-sm" >
        <h2>My Dragons</h2>
      </div>
    </Container>
  )
}

export default MyProfile