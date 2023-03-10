'use client';

import { useState } from 'react';
import Image from 'next/image';

import aboutFirst from '@/assets/images/home/about-first.webp';
import aboutSecond from '@/assets/images/home/about-second.webp';

import Button from '../components/Button';

export default function AboutSection() {
    /**
     * Component's states
     */
    const [isActive, setIsActive] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    return (
        <div className='relative mt-16'>
            <div className='relative z-10 mx-auto px-6 md:px-10 max-w-screen-2xl'>
                <div className='md:px-16 py-8 md:py-12 lg:py-16 grid gap-x-16 gap-y-8 sm:gap-y-12 xl:gap-x-32 lg:grid-cols-2'>
                    <div className='relative flex items-center'>
                        <div className='absolute -top-8 md:-top-12 lg:-top-16 left-[-1000vw] right-0 bottom-16 md:-bottom-20 lg:-bottom-16 translate-x-32 lg:-translate-x-32 bg-[#f9f5f1]'></div>
                        {isActive ? (
                            <Image
                                src={aboutFirst}
                                alt='about-image'
                                className={`relative z-10 rounded ${
                                    isClosing
                                        ? 'animate-[fade-out_100ms_ease-in-out_both]'
                                        : 'animate-[fade-in_400ms_ease-in-out_300ms_both]'
                                }`}
                            />
                        ) : (
                            <Image
                                src={aboutSecond}
                                alt='about-image'
                                className={`relative z-10 rounded ${
                                    isClosing
                                        ? 'animate-[fade-out_100ms_ease-in-out_both]'
                                        : 'animate-[fade-in_400ms_ease-in-out_300ms_both]'
                                }`}
                            />
                        )}
                    </div>
                    <div className='flex flex-col justify-between xl:my-16'>
                        {isActive ? (
                            <div className='min-h-[320px] md:min-h-[256px]'>
                                <div className='grid gap-y-4 xl:gap-y-6 xl:mt-8 xl:pr-8'>
                                    <p
                                        className={`text-sm font-semibold tracking-wider uppercase ${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_300ms_both]'
                                        }`}
                                    >
                                        Tr???i nghi???m kh??ch h??ng
                                    </p>
                                    <p
                                        className={`text-[26px] md:text-[32px] xl:text-4xl font-bold ${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_350ms_both]'
                                        }`}
                                    >
                                        S???n ph???m t???i Junie
                                    </p>
                                    <p
                                        className={`${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_600ms_both]'
                                        }`}
                                    >
                                        T???m bi???t nh???ng m???u ph??? ki???n ?????t ????? m???t c??ch v?? l?? do chi ph?? m???t b???ng & k??nh
                                        ph??n ph???i.
                                    </p>
                                    <p
                                        className={`${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_600ms_both]'
                                        }`}
                                    >
                                        Junie t???p trung v??o k??nh Online v?? l??m ch??? qu?? tr??nh s???n xu???t, mang t???t c??? chi
                                        ph?? ti???t ki???m ???????c n??ng cao tr???i nghi???m kh??ch h??ng v???i m???t m???c gi?? h???p l??.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className='min-h-[320px] md:min-h-[256px]'>
                                <div className='grid gap-y-4 xl:gap-y-6 xl:mt-8 xl:pr-8'>
                                    <p
                                        className={`text-sm font-semibold tracking-wider uppercase ${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_300ms_both]'
                                        }`}
                                    >
                                        S???n ph???m ch???t l?????ng
                                    </p>
                                    <p
                                        className={`text-[26px] md:text-[32px] xl:text-4xl font-bold ${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_350ms_both]'
                                        }`}
                                    >
                                        B???n s??? H??i L??ng
                                    </p>
                                    <p
                                        className={`${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_600ms_both]'
                                        }`}
                                    >
                                        Junie kh??ng qu?? quan tr???ng v??? l???i nhu???n c???a ????n h??ng ?????u ti??n v?? Junie bi???t b???n
                                        s??? quay tr??? l???i v?? ch???t l?????ng v?? s??? h??i l??ng.
                                    </p>
                                    <p
                                        className={`${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_600ms_both]'
                                        }`}
                                    >
                                        Junie h???p t??c v???i nh???ng ngh??? nh??n c??? trong n?????c & qu???c t??? ????? l???a ch???n ra ??i???m
                                        m???nh c???a t???ng ngh??? nh??n v???i m???i lo???i s???n ph???m. V???i m???c ?????ch cu???i c??ng mang l???i
                                        m???t s???n ph???m kh??ng ch??? ch???t l?????ng m?? c??n tr???n v???n v??? c???m x??c.
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className='flex gap-10 justify-center'>
                            <Button
                                text
                                className={`border-b ${
                                    isActive ? 'border-secondary opacity-100' : 'border-transparent opacity-70'
                                } transition duration-500`}
                                onClick={() => {
                                    if (!isActive) {
                                        setIsClosing(true);
                                        setTimeout(() => {
                                            setIsClosing(false);
                                            setIsActive(true);
                                        }, 100);
                                    }
                                }}
                            >
                                Gi?? h???p l??
                            </Button>
                            <Button
                                text
                                className={`border-b ${
                                    !isActive ? 'border-secondary opacity-100' : 'border-transparent opacity-70'
                                } transition duration-500`}
                                onClick={() => {
                                    if (isActive) {
                                        setIsClosing(true);
                                        setTimeout(() => {
                                            setIsClosing(false);
                                            setIsActive(false);
                                        }, 100);
                                    }
                                }}
                            >
                                Ch???t l?????ng AAA
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
