import { Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { AppDispatch } from '../redux/store';
import { getDataMissions, setJoinMission } from '../redux/features/DataMissionsSlice';
import { datamission } from '../redux/features/DataMissionsSlice';
import '../index.css'
import loadingSVG from '../assets/loading.svg'
import { useEffect } from 'react';

const Missions = () => {

  const dispatch: AppDispatch = useDispatch()
  const missions = useSelector((state: RootState) => state.missions.datamissions)
  const loading = useSelector((state: RootState) => state.missions.loading)

  useEffect(() => {
    if(missions.length === 0) dispatch(getDataMissions())
  },[])

  const handleClick = (id: string) => {
    dispatch(setJoinMission(id))
  }
    
  return(
    <Container style={{marginTop: '4rem'}} >
      {loading ? <img src={loadingSVG} width={'200rem'} height={'200rem'} className='my-5 rounded mx-auto d-block' alt = 'loading-svg' /> :
        <Table striped variant = {'dark'}>
          <thead>
            <tr className='text-center'>
              <th >Missions</th>
              <th>Launchpad</th>
              <th>successes / attempts</th>
              <th>Status</th>
              <th>Join</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission: datamission) => {
              return (
                <tr className='align-middle' key = { mission.id }>
                  <td >{mission.name}</td>
                  <td className='text-center'><img src = {mission.image} width={'100rem'} height={'75rem'} /></td>
                  <td className='text-center'>{mission.successes} / {mission.attempts}</td>
                  <td className='text-center' >{!mission.join ? 'Not a Member' : <Badge bg="primary">Active Member</Badge>}</td>
                  <td className='text-center'>
                    <Button
                      onClick = {() => handleClick(mission.id)}
                      variant={!mission.join ? "primary" : "danger"}>
                        {!mission.join ? 'Join Mission' : 'Leave Mission'}
                    </Button>
                  </td>
                </tr>
              )})  
            }
          </tbody>
        </Table>
      }
    </Container>    
  )
}

export default Missions;