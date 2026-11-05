'use client'

import { useActionState } from 'react'
import { contact } from '@/data/contact'

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ''
const FAILURE = `The message didn't send. Please email ${contact.email} or WhatsApp ${contact.phoneUae.display}.`
const UNAVAILABLE = `This form isn't available right now. Please email ${contact.email} or WhatsApp ${contact.phoneUae.display}.`

const sendMessage = async (_previous, formData) => {
  const values = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  if (!ACCESS_KEY) {
    return { status: 'error', message: UNAVAILABLE, values }
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        from_name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      }),
    })
    const result = await response.json()

    if (response.ok && result.success) {
      return { status: 'success', message: 'Message sent. I\'ll reply soon.' }
    }
    return { status: 'error', message: FAILURE, values }
  } catch {
    return { status: 'error', message: FAILURE, values }
  }
}

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(sendMessage, {
    status: 'idle',
  })
  const values = state.values ?? {}

  return (
    // React resets the fields to their defaultValue after each send, so what
    // the visitor typed comes back if sending fails, and clears if it succeeds.
    <form action={formAction} className='xl:pl-10 2xl:pl-20'>
      <div className='md:grid md:items-center md:grid-cols-2 md:gap-2'>
        <div className='mb-4'>
          <label htmlFor='name' className='label reveal-up'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            autoComplete='name'
            required
            placeholder='Your name'
            defaultValue={values.name}
            className='text-field reveal-up'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='label reveal-up'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            autoComplete='email'
            required
            placeholder='your.email@example.com'
            defaultValue={values.email}
            className='text-field reveal-up'
          />
        </div>

        <div className='mb-4 md:col-span-2'>
          <label htmlFor='subject' className='label reveal-up'>
            Subject
          </label>
          <input
            type='text'
            name='subject'
            id='subject'
            required
            placeholder="What's this about?"
            defaultValue={values.subject}
            className='text-field reveal-up'
          />
        </div>

        <div className='mb-4 md:col-span-2'>
          <label htmlFor='message' className='label reveal-up'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            required
            placeholder='Tell me about the role or project'
            defaultValue={values.message}
            className='text-field resize-y min-h-32 max-h-80 reveal-up'
          ></textarea>
        </div>
      </div>

      <button
        type='submit'
        disabled={isPending}
        className='btn btn-primary [&]:max-w-full w-full justify-center disabled:opacity-60 disabled:cursor-wait reveal-up'
      >
        {isPending ? 'Sending...' : 'Send message'}
      </button>

      <p
        role='status'
        className={`text-sm mt-3 min-h-5 ${
          state.status === 'error' ? 'text-amber-300' : 'text-emerald-400'
        }`}
      >
        {state.message}
      </p>
    </form>
  )
}

export default ContactForm
