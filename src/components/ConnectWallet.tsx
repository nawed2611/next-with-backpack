'use client'

import React, { useEffect, useState } from 'react'
import { FC } from 'react'
import Link from 'next/link'
import { X } from './ui/icons'
import { usePathname } from 'next/navigation'
import { CollapsibleTrigger } from './ui/Collapsible'

const ConnectWallet = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isModalOpen]);

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsModalOpen(false);
			}
		}

		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('keydown', handleEsc);
		}
	}, []);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	}

	const connectToMetaMask = () => {
		console.log('connect to metamask');
	}

	const connectToBackpack = () => {
		console.log('connect to backpack');
	}

	return (
		<>
			<button className="bg-white text-black rounded-md px-4 py-2 hover:scale-105 transition-all" onClick={handleModalOpen}>
				Connect Wallet
			</button>


			{
				isModalOpen && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
						<div className="bg-white rounded-md p-4 w-[30vw]">
							<div className="flex items-center justify-between">
								<div className='flex items-center flex-col'>
									<h1 className="text-2xl">Connect Wallet</h1>
									<p className='font-light text-sm'>Use providers given below to connect your wallet</p>
								</div>
								<button className="text-black" onClick={() => setIsModalOpen(false)}><X /></button>
							</div>
							<div className="flex flex-col gap-y-4 mt-8 items-center justify-between">
								<button onClick={connectToMetaMask} className="bg-gray-700 w-44 text-white rounded-md px-4 py-2 hover:scale-105 transition-all">Metamask</button>
								<button onClick={connectToBackpack} className="bg-gray-700 w-44 text-white rounded-md px-4 py-2 hover:scale-105 transition-all">Backpack</button>
							</div>
						</div>
					</div>
				)
			}
		</>
	)
}



export default ConnectWallet
