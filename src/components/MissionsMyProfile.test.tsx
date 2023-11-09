import { describe, test, expect } from 'vitest'
import { renderWithProviders } from '../utils/test-utils'
import { setupStore } from '../redux/store' 
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react'
import 'whatwg-fetch'
import Missions from './Missions'
import MyProfile from './MyProfile'
import Rockets from './Rockets'
import Dragons from './Dragons'

const store = setupStore()

describe('Missions and MyProfile', () => {
    
    test('should be 1 button leave mission', async () => {  
        renderWithProviders(<Missions />, { store })      
        await waitForElementToBeRemoved(() => screen.queryAllByAltText(/loading-svg/i))
        const reserve = screen.getAllByRole('button', {name: /join mission/i})
        fireEvent.click(reserve[0])
        expect(screen.getAllByRole('button', {name: /leave mission/i}).length).toEqual(1)
    })

    test('should be 1 button cancel reservation', async () => {  
        renderWithProviders(<Rockets />, { store })       
        await waitForElementToBeRemoved(() => screen.queryAllByAltText(/loading-svg/i))
        const reserve = screen.getAllByRole('button', {name: /reserve rocket/i})
        fireEvent.click(reserve[0])
        expect(screen.getAllByRole('button', {name: /cancel reservation/i}).length).toEqual(1)
    })

    test('should be 1 button leave dragon', async () => {  
        renderWithProviders(<Dragons />, { store })       
        await waitForElementToBeRemoved(() => screen.queryAllByAltText(/loading-svg/i))
        const reserve = screen.getAllByRole('button', {name: /reserve dragon/i})
        fireEvent.click(reserve[0])
        expect(screen.getAllByRole('button', {name: /leave dragon/i}).length).toEqual(1)
    })

    test('should be Mission VAFB SLC 3W in MyProfile', async () => {   
        renderWithProviders(<MyProfile />, { store })
        const mission = screen.getByText(/VAFB SLC 3W/i)
        expect(mission).toBeDefined()
    })

    test('should be Dragon 1 in MyProfile', async () => {   
        renderWithProviders(<MyProfile />, { store })
        const dragon = screen.getByText(/Dragon 1/i)
        expect(dragon).toBeDefined()
    })
    
    test('should be Rocket Falcon 1 in MyProfile', async () => {   
        renderWithProviders(<MyProfile />, { store })
        const rocket = screen.getByText(/Falcon 1/i)
        expect(rocket).toBeDefined()
    })
})