import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  contractAddress: string;
  onCopy: (text: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, contractAddress, onCopy }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
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
                  className="text-3xl font-display text-center mb-8 text-crumpet-primary"
                >
                  How to Buy CRUMPET
                </Dialog.Title>

                <div className="space-y-8">
                  {/* Contract Address Section */}
                  <div className="text-center">
                    <div className="text-4xl mb-4">📋</div>
                    <h4 className="text-xl font-display mb-4 text-crumpet-primary">Contract Address</h4>
                    <div className="bg-gray-50 p-4 rounded-xl mb-4">
                      <p className="text-lg font-medium">CA Will launch soon!</p>
                    </div>
                    <button
                      onClick={() => onCopy(contractAddress)}
                      className="btn-secondary mb-2"
                    >
                      Copy CA
                    </button>
                    <p className="text-sm text-gray-600">
                      Copy the contract address to trade on your favorite Solana DEX
                    </p>
                  </div>

                  {/* Chart Section */}
                  <div className="text-center">
                    <div className="text-4xl mb-4">📊</div>
                    <h4 className="text-xl font-display mb-4 text-crumpet-primary">View Chart</h4>
                    <button
                      onClick={onClose}
                      className="btn-secondary mb-2"
                    >
                      Open on DexScreener
                    </button>
                    <p className="text-sm text-gray-600">
                      View live price chart and trading info
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    type="button"
                    className="text-sm text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
