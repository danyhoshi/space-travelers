import { describe, test, expect } from 'vitest'
import { renderWithProviders } from '../utils/test-utils'
import { setupStore } from '../redux/store' 
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import 'whatwg-fetch'
import Rockets from './Rockets'
//import MyProfile from './MyProfile'
//import Dragons from './Dragons'
//import Missions from './Missions'

const store = setupStore()



describe('<Rockets >', () => {

    test('should pass', async () => {
        renderWithProviders(<Rockets />, { store })
        await waitForElementToBeRemoved(() => screen.queryAllByAltText(/loading-svg/i))
        const reserve = screen.getAllByRole('button', {name: /reserve rocket/i})
        expect(reserve.length).toEqual(4)
              

    })

    
    
})