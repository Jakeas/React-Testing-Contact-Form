import React from 'react'
import { screen, render, getByRole } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

test('Renders ContactForm without errors', () => {
    render(<ContactForm />)
})

test('Find and click submit button', () => {
    render(<ContactForm />)
    
    const button = screen.getByRole("button");
    userEvent.click(button)
})

test('When the user fills out the form, first name appears in the object', async () => {
    render(<ContactForm />)

    const fnameInput = screen.getByLabelText("First Name*");
    userEvent.type(fnameInput, "Jake")
})

test('When the user fills out the form, last name appears in the object', async () => {
    render(<ContactForm />)   
    
    const lnameInput = screen.getByLabelText("Last Name*");
    userEvent.type(lnameInput, "Sierra")
})

test('When the user fills out the form, email appears in the object', async () => {
    render(<ContactForm />)    
    
    const emailInput = screen.getByLabelText("Email*");
    userEvent.type(emailInput, "myemail@email.com")
})

test('When the user fills out the form, message appears in the object', async () => {
    render(<ContactForm />)

    const messageInput = screen.getByLabelText("Message");
    userEvent.type(messageInput, "NA")
})

test('When the max number of allowable characters in first name input is max 3.', () => {
    render(<ContactForm />)

    const fnameInput = screen.getByLabelText(/first Name/i)
    userEvent.type(fnameInput, "Jacob")

})

// test('Using an invalid value shows an error message', async () => {
//     render(<ContactForm />)
//     const err = screen.getByLabelText(/first name/i)
//     expect(("err")).not.toBeInTheDocument()
// })



