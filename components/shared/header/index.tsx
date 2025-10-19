import { Store } from 'lucide-react';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex justify-between items-center py-3">
                <Link href="/" className="flex items-center gap-2">
                    <Store />
                    <span className="hidden lg:block font-bold text-2xl">{APP_NAME}</span>
                </Link>

                {/* Menu gère tout (desktop + mobile) */}
                <Menu />
            </div>
        </header>
    );
};

export default Header;
