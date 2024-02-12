import Image from "next/image";
import Link from "next/link";
import TgLogo from "@/public/img/tg_logo.svg"
export default function Header() {
    return (
        <header className="container mx-auto p-6 flex items-center absolute top-0 left-0 right-0 z-10   ">
            <div className="w-[250px]">
                <div className="w-10%"><img src="/img/logo.png" alt="" /></div>
            </div>

            <nav className="flex gap-x-4 ml-10 ">
                <Link className="text-white hover:-gold-600" href="/">Главная</Link>
                <Link className="text-white hover:-gold-600" href="/">Услуги</Link>
                <Link className="text-white hover:-gold-600" href="/">Косметика</Link>
                <Link className="text-white hover:-gold-600" href="/">Наша команда</Link>
                <Link className="text-white hover:-gold-600" href="/">Блог</Link>
                <Link className="text-white hover:-gold-600" href="/">О нас </Link>
                <Link className="text-white hover:-gold-600" href="/">Контакты</Link>
            </nav>
            <div className="ml-8 mb-8 ">
                <div className="flex gap-x-2">
                    <img className="w-[22px]" src="/img/trubka.png" alt="" />
                    <p className="text-white">8 951 842 97 15</p>
                </div>

                <div className="ml-11 mt-5 flex gap-x-4">
                    <a href="#" className="group">
                        <img className="w-[32px] group-hover:hidden" src="/img/telegaSER.png" alt="" />
                        <img className="w-[32px] hidden group-hover:block" src="/img/telegaGOLD (1).png" alt="" />
                    </a>
                    <a href="#" className="group">
                        <img className="w-[32px] group-hover:hidden" src="/img/whatsSER.png" alt="" />
                        <img className="w-[32px] hidden group-hover:block" src="/img/whatsGOLD (1).png" alt="" />
                    </a>
                </div>

            </div>

        </header>
    )
}
