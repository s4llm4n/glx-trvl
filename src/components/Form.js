import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
        <Form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Details</label>
            <text rows='6' placeholder='Type a short message here' />
            <button className='btn'>Submit</button>
        </Form>
    </div>
  )
}

export default Form