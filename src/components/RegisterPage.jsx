import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom';

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const registerHandler = async (data) => {

    }

  return (
    <div
    className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
        <form onSubmit={handleSubmit(registerHandler)}
        className='sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md'>
            <h1 className='text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl'>
                Register Here
            </h1>
            <hr className='mt-2 mb-5 text-black'></hr>

            <div className='flex flex-col gap-3'>
                
            </div>
        </form>
        </div>
  )
}

export default RegisterPage