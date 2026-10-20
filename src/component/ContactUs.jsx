import React, { useState } from 'react'
import { Input, Button } from './index'
import Swal from 'sweetalert2'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.message.trim()) {
      Swal.fire({
        title: 'Missing Details',
        text: 'Please enter your name and message.',
        icon: 'warning',
        background: '#1e293b',
        color: '#f8fafc',
        confirmButtonColor: '#3b82f6',
      })
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      Swal.fire({
        title: 'Message Sent Successfully!',
        text: 'Thank you for reaching out. We will get back to you shortly.',
        icon: 'success',
        background: '#1e293b',
        color: '#f8fafc',
        confirmButtonColor: '#3b82f6',
      })
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 600)
  }

  return (
    <div className='flex items-center justify-center w-full py-12 px-4'>
      <div className='w-full max-w-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border border-slate-700/60 shadow-2xl shadow-blue-500/10'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white mb-4 shadow-lg shadow-blue-500/30'>
            <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
            </svg>
          </div>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight'>
            Get in Touch
          </h1>
          <p className='text-slate-400 text-sm sm:text-base mt-2 max-w-md mx-auto'>
            Have questions, feedback, or want to collaborate? Fill out the form below and we will get back to you!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <Input
              label='Full Name *'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
              placeholder='e.g. Safwan Khan'
              required
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <Input
                label='Email Address'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='you@example.com'
              />
            </div>
            <div>
              <Input
                label='Phone Number'
                name='phone'
                type='tel'
                value={formData.phone}
                onChange={handleChange}
                placeholder='+92 327 0343432'
              />
            </div>
          </div>

          <div>
            <label className='inline-block pb-2 pl-1 text-slate-300 font-medium text-sm'>
              Message *
            </label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Write your thoughts, questions, or feedback here...'
              rows={4}
              required
              className='w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 border-2 border-slate-700 outline-none transition-all duration-300 placeholder-slate-500 focus:border-blue-500 focus:bg-slate-700/50 focus:shadow-lg focus:shadow-blue-500/20 hover:border-slate-600 resize-none'
            ></textarea>
          </div>

          <Button
            type='submit'
            className='w-full py-3.5 text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30'
            disabled={isSubmitting}
            childern={
              isSubmitting ? (
                <>
                  <svg className='w-5 h-5 animate-spin' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v8H4z'></path>
                  </svg>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className='w-5 h-5 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
                  </svg>
                </>
              )
            }
          />
        </form>

        {/* Contact Info Footer Cards */}
        <div className='mt-10 pt-8 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <a
            href='tel:+923270343432'
            className='flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/40 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group'
          >
            <div className='w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform'>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path>
              </svg>
            </div>
            <div>
              <p className='text-xs text-slate-400 font-medium'>Phone / WhatsApp</p>
              <p className='text-sm text-slate-200 font-semibold group-hover:text-blue-300 transition-colors'>+92 327 0343432</p>
            </div>
          </a>

          <a
            href='mailto:safwan@example.com'
            className='flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/40 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group'
          >
            <div className='w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform'>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206'></path>
              </svg>
            </div>
            <div>
              <p className='text-xs text-slate-400 font-medium'>Email Support</p>
              <p className='text-sm text-slate-200 font-semibold group-hover:text-purple-300 transition-colors'>safwan@example.com</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
