'use client';

import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            {/* --- NAVIGATION DESKTOP --- */}
            <nav className="hidden md:flex w-full max-w-xs gap-2 items-center">
                <ModeToggle />
                <Button asChild variant="ghost">
                    <Link href="/cart">
                        <ShoppingCart />
                        Cart
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/sign-in">
                        <UserIcon />
                        Sign In
                    </Link>
                </Button>
            </nav>

            {/* --- NAVIGATION MOBILE/TABLET --- */}
            <nav className="md:hidden">
                <Sheet >
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <EllipsisVertical />
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="flex flex-col gap-3 p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    >
                        <SheetTitle className="text-lg font-semibold mb-2">Menu</SheetTitle>
                        <ModeToggle />

                        <Button asChild variant="ghost">
                            <Link href="/cart" >
                                <ShoppingCart />
                                Cart
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="/sign-in">
                                <UserIcon />
                                Sign In
                            </Link>
                        </Button>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
};

export default Menu;
