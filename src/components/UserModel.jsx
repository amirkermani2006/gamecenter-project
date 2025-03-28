'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Select from 'react-select'

export default function UserModel({open,setOpen,setUser,user}) {

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const user = Object.fromEntries(formData)

    setUser(prev => [...prev, user])

    setOpen(false)
    localStorage.setItem("users",JSON.stringify(user))
  }
  
  const [selected, setSelected] = useState("");

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <form onSubmit={handleSubmit} className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    ثبت سفارش جدید
                  </DialogTitle>
                </div>
              </div>
              <div className='flex flex-col'>
                <label className='mr-10 mt-3 flex justify-end'>
                  :نام کاربری
                </label>
                <input
                  id='username'
                  name='username'
                  type='text'
                  className='border-1 border-black mx-10 rounded-md mt-1 pl-1'
                />
                <label className='mr-10 mt-3 flex justify-end'>
                  :نام و نام خانوادگی
                </label>
                <input
                  id='fullname'
                  name='fullname'
                  type='text'
                  className='border-1 border-black mx-10 rounded-md mt-1 pl-1'
                />
                <label className='mr-10 mt-3 flex justify-end'>
                  :شماره همراه
                </label>
                <input
                  id='phone'
                  name='phone'
                  type='text'
                  className='border-1 border-black mx-10 rounded-md mt-1 pl-1'
                />
                <label className='mr-10 mt-3 flex justify-end'>
                  :سن
                </label>
                <input
                  id='age'
                  name='age'
                  type='text'
                  className='border-1 border-black mx-10 rounded-md mt-1 pl-1'
                />
                <label className='mr-10 mt-3 flex justify-end'>
                  :آدرس
                </label>
                <input
                  id='address'
                  name='address'
                  type='text'
                  className='border-1 border-black mx-10 rounded-md mt-1 pl-1'
                />
                <label className='mr-10 mt-3 flex justify-end'>
                  :گیم سنتر محل خدمت
                </label>
                <select
                  id="gamecenter"
                  name="gamecenter"
                  className="border-1 border-black mx-10 rounded-md mt-1 pl-1"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  <option value="">یک گزینه رو انتخاب کنید</option>
                </select>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto cursor-pointer"
              >
                ثبت
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto cursor-pointer"
              >
                لغو
              </button>
            </div>
          </DialogPanel>
        </div>
      </form>
    </Dialog>
  )
}
