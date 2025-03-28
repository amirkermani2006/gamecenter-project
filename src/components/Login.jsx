import React from 'react'

export default function Login() {

    return (
        <form className="relative min-h-screen">
            <div>
                {/* هدر */}
                <header className="absolute border-b-2 border-blue-700 flex justify-center items-center w-full rounded-2xl text-white bg-blue-700 rounded-t-none h-14 text-xl sm:text-2xl shadow-lg">
                    گیم سنتر
                </header>

                {/* بخش اصلی */}
                <main className="bg-green-300 w-full min-h-screen">
                    <div className="absolute flex flex-col gap-5 mt-[37%] ml-[26%] sm:mt-[18%] sm:ml-[37%] md:ml-[40%] lg:ml-[43.3%]">
                        {/* فرم ورود */}
                        <div className="flex flex-col gap-5 w-full">
                            <input
                                type="text"
                                placeholder="نام کاربری"
                                id="username"
                                name="username"
                                className="w-full sm:w-46 h-10 border-1 border-black bg-white rounded-xl text-center focus:outline-none
                            focus:ring-none placeholder:text-gray-500 focus:placeholder-transparent transition shadow-lg"
                            />
                            <input
                                type="password"
                                placeholder="رمز عبور"
                                id="password"
                                name="password"
                                className="w-full sm:w-46 h-10 border-1 border-black bg-white rounded-xl text-center focus:outline-none
                            focus:ring-none placeholder:text-gray-500 focus:placeholder-transparent transition shadow-lg"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-t from-green-900 to-green-700 w-full sm:w-46 h-10 rounded-xl text-white shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300"
                            >
                                ورود
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </form>
    )
}
