import { describe, test, expect, beforeEach } from 'vitest'
import { renderWithProviders } from '../utils/test-utils'
import { setupStore } from '../redux/store' 
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react'
import 'whatwg-fetch'
import Dragons from './Dragons'
import '@testing-library/jest-dom';

const store = setupStore()

beforeEach(async () => {
    renderWithProviders(<Dragons />, { store })
})

describe('<Dragons />', () => {

    test('should render two buttons: reserve dragons', async () => {
        await waitForElementToBeRemoved(() => screen.queryAllByAltText(/loading-svg/i))
        const reserve = screen.getAllByRole('button', {name: /reserve dragon/i})
        expect(reserve).toHaveLength(2)
    })

    test('should reserve dragon', async () => {
        const reserve = screen.getAllByRole('button', {name: /reserve dragon/i})
        fireEvent.click(reserve[1])
        expect(screen.getByText(/reserved/i)).toBeInTheDocument()
    })
       
})