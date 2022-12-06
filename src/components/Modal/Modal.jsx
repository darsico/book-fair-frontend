import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Modal({ setIsOpen, isOpen }) {
 const navigate = useNavigate()
 function closeModal() {
  setIsOpen(false)
 }

 const goToLogin = () => {
  navigate('/buyer/login')
  setIsOpen(false)
 }


 return (
  <>
   <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
     <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
     >
      <div className="fixed inset-0 bg-black bg-opacity-25" />
     </Transition.Child>

     <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
       <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
       >
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
         <Dialog.Title
          as="h3"
          className="text-base font-medium leading-6 text-gray-900"
         >
          Please login to continue shopping
         </Dialog.Title>
         <div className="mt-2">
          <p className="text-sm text-gray-500">
           You have to be logged to add products to your cart
          </p>
         </div>

         <div className="mt-4 flex justify-between">
          <button
           type="button"
           className="main-button inline-flex gap-4 items-center"
           onClick={goToLogin}
          >
           Go to login page<span className='text-xl'> ➜</span>
          </button>
          <button
           type="button"
           className="secondary-button"
           onClick={closeModal}
          >
           Cancel
          </button>
         </div>
        </Dialog.Panel>
       </Transition.Child>
      </div>
     </div>
    </Dialog>
   </Transition>
  </>
 )
}