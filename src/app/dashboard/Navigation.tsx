'use client'

import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'

const Navigation: FC<PropsWithChildren<{ href: string }>> = ({ href, children }) => {
	const pathname = usePathname()

	return (
		<Link
			href={href}
			className={`rounded-md px-3 py-2 text-sm font-medium` + (href == pathname ? ' bg-neutral-200 text-neutral-900' : ' text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900')}
		>
			{children}
		</Link >
	)
}

export default Navigation
