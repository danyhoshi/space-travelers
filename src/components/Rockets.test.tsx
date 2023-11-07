import { describe, test, expect } from 'vitest'
import { renderWithProviders } from '../utils/test-utils'
import Rockets from './Rockets'
import { setupStore } from '../redux/store' 
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import 'whatwg-fetch'
//import { getDataRockets } from '../redux/features/DataRocketsSlice'
//import { AppDispatch } from '../redux/store';
//import { useDispatch } from 'react-redux';

////const dispatch: AppDispatch = useDispatch()
const store = setupStore()

describe('<Rockets >', () => {

    test('should pass', async () => {
        //dispatch(getDataRockets())
        renderWithProviders(<Rockets />, { store })
        await waitForElementToBeRemoved(() => screen.queryAllByAltText(/loading-svg/i))
        screen.debug()
        expect(1+1).toEqual(2)

    })

})