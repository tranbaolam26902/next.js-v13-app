import Image from 'next/image';

import bannerLeft from '@/assets/images/home/banner-left.webp';
import bannerRight from '@/assets/images/home/banner-right.webp';

import Button from '../components/Button';

export default function HeroSection() {
    return (
        <div className='relative flex min-h-[120vw] md:min-h-[70vw] lg:min-h-[38vw]'>
            <div className='absolute hidden lg:block w-6/12 h-full'>
                <Image src={bannerLeft} className='w-full h-full object-cover' alt='banner-image' priority />
            </div>
            <div className='absolute right-0 w-full lg:w-6/12 h-full'>
                <Image src={bannerRight} className='w-full h-full object-cover' alt='banner-image' priority />
            </div>
            <div className='absolute flex flex-col items-center justify-center w-full h-full bg-secondary/30'>
                <p className='text-xs md:text-sm text-white font-bold uppercase animate-[slide-in-bottom_400ms_ease-in-out_400ms_both]'>
                    Táo bạo. Tỏa sáng.
                </p>
                <p className='my-10 text-4xl md:text-5xl xl:text-[64px] text-white font-bold animate-[slide-in-bottom_400ms_ease-in-out_450ms_both]'>
                    Junie's Specials
                </p>
                <div className='flex gap-6 text-black'>
                    <Button
                        href='/'
                        accent
                        className='px-4 py-1.5 md:py-2 w-[128px] md:min-w-[152px] animate-[slide-in-bottom_400ms_ease-in-out_500ms_both]'
                    >
                        Bán chạy
                    </Button>
                    <Button
                        href='/'
                        accent
                        className='px-4 py-1.5 md:py-2 min-w-[128px] md:min-w-[152px] animate-[slide-in-bottom_400ms_ease-in-out_500ms_both]'
                    >
                        Sale Off
                    </Button>
                </div>
            </div>
            <div className='absolute w-full h-full bg-white animate-[slide-out-left_300ms_ease-in-out_forwards]'></div>
        </div>
    );
}
