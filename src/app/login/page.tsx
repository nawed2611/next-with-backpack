import ConnectWallet from '@/components/ConnectWallet'

const LoginPage = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center space-y-12">
			<h1 className="text-4xl text-white">Welcome to Next.js Starter with Backpack</h1>
			<ConnectWallet />
		</div>
	)
}

export default LoginPage
