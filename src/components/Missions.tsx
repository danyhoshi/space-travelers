import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react'
import { AppDispatch } from '../redux/store';
import { setJoinMission } from '../redux/features/DataMissionsSlice';
import { getDataMissions } from '../redux/features/DataMissionsSlice';
import { datamission } from '../redux/features/DataMissionsSlice';
import '../index.css'
import loadingSVG from '../assets/loading.svg'

const Missions = () => {

  const dispatch: AppDispatch = useDispatch()
  const missions = useSelector((state: RootState) => state.missions.datamissions)
  const loading = useSelector((state: RootState) => state.missions.loading)

  useEffect(() => {
      if(missions.length === 0){
        dispatch(getDataMissions())
      } 
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
                  <td className='text-center' >NOT A MEMBER</td>
                  <td className='text-center'>
                    <button
                      onClick = {() => handleClick(mission.id)}
                      className='bg-info'>
                        Join Mission
                    </button>
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