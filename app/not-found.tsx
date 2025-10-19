'use client';
import { APP_NAME } from '@/lib/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Store } from 'lucide-react';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen '>
            <div className='flex-start'>
                <Link href='/' className='flex-start'>
                    <Store />
                    <span className='hidden lg:block font-bold text-2xl ml-3'>
                        {APP_NAME}
                    </span>
                </Link>
            </div>
            <div className='p-6 w-1/3 text-center'>
                <h1 className='text-3xl font-bold mb-4'>Not Found</h1>
                <p className='text-destructive'>Could not find requested resource</p>
                <Button
                    variant='outline'
                    className='mt-4 ml-2 cursor-pointer'
                    onClick={() => (window.location.href = '/')}
                >
                    Back to home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;