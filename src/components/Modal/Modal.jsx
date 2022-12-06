import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartStore, useProductStore } from '../../store'

export default function Modal({ setIsOpen, isOpen, sameSellerValidation = false, loginValidation = false, modalTitle = '', modalText = '', pathToRedirect, buttonText }) {
  const navigate = useNavigate()
  const { setIsOpenCart } = useProductStore((state) => state)
  const { cart } = useCartStore((state) => state) || []

  function closeModal() {
    setIsOpen(false)
  }

  const goToLatestSellerInCart = () => {
    const sellerInCart = cart[0]?.seller._id
    setIsOpen(false)
    navigate(`/sellers/${sellerInCart}`)
  }

  const handleOnClick = () => {
    navigate(pathToRedirect)
    setIsOpenCart(false)
    setIsOpen(false)
  }


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                    {modalTitle}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {modalText}          </p>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className="main-button inline-flex gap-4 items-center"
                      onClick={handleOnClick}
                    >
                      {buttonText}<span className='text-xl'> ➜</span>
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