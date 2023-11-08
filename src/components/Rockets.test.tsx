import { describe, test, expect, beforeEach } from 'vitest'
import { renderWithProviders } from '../utils/test-utils'
import { setupStore } from '../redux/store' 
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react'
import 'whatwg-fetch'
import Rockets from './Rockets'
import '@testing-library/jest-dom';

const store = setupStore()

beforeEach(async () => {
    renderWithProviders(<Rockets />, { store })
})

describe('<Rockets >', () => {

    test('should render four buttons: reserve rockets', async () => {
        await waitForElementToBeRemoved(() => screen.queryAllByAltText(/loading-svg/i))
        const reserve = screen.getAllByRole('button', {name: /reserve rocket/i})
        expect(reserve).toHaveLength(4)
    })

    test('should reserve  rocket', async () => {
        const reserve = screen.getAllByRole('button', {name: /reserve rocket/i})
        fireEvent.click(reserve[0])
        expect(screen.getByText(/reserved/i)).toBeInTheDocument()
    })
       
})