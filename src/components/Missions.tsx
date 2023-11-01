import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

const Missions = () => {
    return (
        <Container>
            <Table striped>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Launchpad</th>
          <th>successes / attempts</th>
          <th>Status</th>
          <th>Join</th>
        </tr>
      </thead>
      <tbody>
            <tr>
              <td>mission name</td>
              <td><img /></td>
              <td>mission successes / mission attempts</td>
              <td> NOT A MEMBER</td>
              <td>
                <button
                  id = '1'
                  className='bg-info'>
                    Join Mission
                </button>
              </td>
            </tr>
        
      </tbody>
    </Table>
        </Container>
        
    )
}
export default Missions;