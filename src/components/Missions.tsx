import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react'
import { AppDispatch } from '../redux/store';
import { setJoinMission } from '../redux/features/DataMissionsSlice';
import { getDataMissions } from '../redux/features/DataMissionsSlice';
import { datamission } from '../redux/features/DataMissionsSlice';

const Missions = () => {

  const dispatch: AppDispatch = useDispatch()
  const missions = useSelector((state: RootState) => state.missions.datamissions)
  const loading = useSelector((state: RootState) => state.missions.loading)

  useEffect(() => {
      if(missions.length === 0){
          dispatch(getDataMissions())
      } 
  },[])

  const handleClick = (e: React.MouseEvent) => {
    dispatch(setJoinMission(parseInt(e.currentTarget.id)))
  }
    return (
        <Container>
            <Table striped variant = {'dark'}>
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
                {loading ? <h2 className='text-center'>Loading...</h2> :
                missions.map((mission: datamission) => {
                  return (
                    <tr>
                      <td>{mission.name}</td>
                      <td><img src = {mission.image} width={'100rem'} height={'75rem'} /></td>
                      <td>{mission.successes} / {mission.attempts}</td>
                      <td>NOT A MEMBER</td>
                      <td>
                        <button
                          onClick = {(e) => handleClick(e)}
                          className='bg-info'>
                            Join Mission
                        </button>
                      </td>
                    </tr>
                  )
                })  
                }
              </tbody>
            </Table>
        </Container>
        
    )
}
export default Missions;