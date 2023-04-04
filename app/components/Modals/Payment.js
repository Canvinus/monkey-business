import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useState } from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { ethers } from 'ethers'

import abi from '@/utils/constants/abi.json'
import Image from 'next/image'

export default function Payment({ handleClose }) {
  const [amount, setAmount] = useState(0)
  const handleAmountChange = (e) => {
    const nAmount = Number(e.target.value)
    nAmount.toString() === NaN.toString() || nAmount === 0
      ? setAmount(0)
      : setAmount(nAmount)
  }

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: '0x4d224452801ACEd8B2F0aebE155379bb5D594381',
    abi: abi,
    functionName: 'transfer',
    args: [
      '0xA640F6f8fb40C5521c2D94C369755E3573F5D4B9',
      ethers.BigNumber.from(
        ethers.utils.parseUnits(amount.toString(), 'ether')
      ),
    ],
  })
  const { data, write, error } = useContractWrite(config)
  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <div
      className="relative z-30"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-800 opacity-80 transition-opacity" />
      <div className="fixed inset-0 z-30 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"></div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="flex justify-center items-center">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900 mr-2"
                      id="modal-title"
                    >
                      Donate in APE
                    </h3>
                    <ConnectButton
                      label="Connect"
                      accountStatus="avatar"
                      chainStatus="none"
                      showBalance={false}
                    />
                  </div>
                  <div className="flex justify-center items-center mt-4 mb-2">
                    <input
                      className="ml-2 shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="ape"
                      type="text"
                      placeholder="APE amount"
                      onChange={handleAmountChange}
                    />
                    <Image
                      className="ml-2 mr-16"
                      src="/logos/ape.png"
                      width={36}
                      height={36}
                      alt="ape-logo"
                    />
                    <p className="text-sm text-gray-500"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {amount !== 0 && (
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                >
                  Send
                </button>
              )}
              <button
                onClick={handleClose}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
