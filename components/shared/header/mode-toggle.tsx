'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';

export function ModeToggle() {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    // N’affiche rien tant que le composant n’est pas monté côté client.
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return (
            <Button variant="ghost" disabled>
                <SunMoon className="opacity-50" />
            </Button>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                    {theme === 'system' ? (
                        <SunMoon />
                    ) : theme === 'dark' ? (
                        <MoonIcon />
                    ) : (
                        <SunIcon />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md shadow-lg p-2"
            >
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    checked={theme === 'system'}
                    onClick={() => setTheme('system')}
                >
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === 'light'}
                    onClick={() => setTheme('light')}
                >
                    Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === 'dark'}
                    onClick={() => setTheme('dark')}
                >
                    Dark
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>

        </DropdownMenu >
    )
}
