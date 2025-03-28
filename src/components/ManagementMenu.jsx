import { useState } from "react"
import UserModel from "./UserModel"

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]
  
  export default function ManagementMenu() {

    const [open,setOpen] = useState(false)
    const [user,setUser] = useState([])

    

    return (
      <div className="px-2 sm:px-4 lg:px-8 bg-green-300 min-h-screen">
        <header className="border-b-2 border-blue-700 flex justify-center items-center rounded-2xl text-white bg-blue-700 rounded-t-none h-12 sm:h-14 text-lg sm:text-xl md:text-2xl shadow-lg">
                    گیم سنتر
                </header>
        <div className="sm:flex sm:items-center mt-4 sm:mt-6">
          <div className="sm:flex-auto">
            <h1 className="text-sm sm:text-base font-semibold leading-6 text-gray-900">سفارشات</h1>
          </div>
          <div className="mt-2 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-2 sm:px-3 py-1.5 sm:py-2 text-center text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer flex justify-end sm:justify-start items-end ml-auto -mt-8 sm:-mt-0 sm:mr-3"
              onClick={()=>setOpen(true)}
            >
              ایجاد+
            </button>
          </div>
        </div>
        <div className="mt-4 sm:mt-8 flow-root">
          <div className="-mx-2 -my-2 overflow-x-auto lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 text-center">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-2 sm:py-3.5 text-right text-xs sm:text-sm font-semibold text-gray-900 pr-2 sm:pr-24 md:pr-14 lg:pr-24">
                        #
                      </th>
                      <th scope="col" className="py-2 sm:py-3.5 pl-2 pr-8 sm:pr-24 md:pr-14 lg:pr-24 text-right text-xs sm:text-sm font-semibold text-gray-900 sm:pl-0">
                        نام کاربری
                      </th>
                      <th scope="col" className="pr-8 sm:pr-24 md:pr-14 lg:pr-24 py-2 sm:py-3.5 text-right text-xs sm:text-sm font-semibold text-gray-900">
                          نام و نام خانوادگی
                      </th>
                      <th scope="col" className="pr-8 sm:pr-24 md:pr-14 lg:pr-24 py-2 sm:py-3.5 text-right text-xs sm:text-sm font-semibold text-gray-900">
                        شماره همراه
                      </th>
                      <th scope="col" className="pr-8 sm:pr-24 md:pr-14 lg:pr-24 py-2 sm:py-3.5 text-right text-xs sm:text-sm font-semibold text-gray-900">
                        سن
                      </th>
                      <th scope="col" className="pr-8 sm:pr-24 md:pr-14 lg:pr-24 py-2 sm:py-3.5 text-right text-xs sm:text-sm font-semibold text-gray-900">
                        آدرس
                      </th>
                      <th scope="col" className="pr-8 sm:pr-24 md:pr-14 lg:pr-24 py-2 sm:py-3.5 text-right text-xs sm:text-sm font-semibold text-gray-900">
                        گیم سنتر محل خدمت
                      </th>
                      <th scope="col" className="relative py-2 sm:py-3.5 pl-2 sm:pl-3 pr-2 sm:pr-0">
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {user.map((person,index) => (
                      <tr key={index} className="">
                        <td className="whitespace-nowrap py-2 sm:py-4 pl-2 pr-2 sm:pr-3 text-xs sm:text-sm font-medium text-gray-900 sm:pl-0">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-2 sm:px-3 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{person.username}</td>
                        <td className="whitespace-nowrap px-2 sm:px-3 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{person.fullname}</td>
                        <td className="whitespace-nowrap px-2 sm:px-3 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{person.phone}</td>
                        <td className="whitespace-nowrap px-2 sm:px-3 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{person.age}</td>
                        <td className="whitespace-nowrap px-2 sm:px-3 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{person.address}</td>
                        <td className="whitespace-nowrap px-2 sm:px-3 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{person.gamecenter}</td>
                        <td className="relative whitespace-nowrap py-2 sm:py-4 pl-2 sm:pl-3 pr-2 text-right text-xs sm:text-sm font-medium sm:pr-0">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <UserModel open={open} setOpen={setOpen} setUser={setUser} user={user}/>
      </div>
    )
  }
  