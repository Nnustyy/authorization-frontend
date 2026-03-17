import { buttonVariants } from "@/shared/components/ui"
import Link from "next/link"

export default function Home() {
	return <div className='text-center space-y-5 '>
		<h1 className="text-4xl font-bold">Главная страница</h1>
		<Link href={'/auth/login'} className={buttonVariants()}>Войти в аккаунт</Link>
	</div>
}
