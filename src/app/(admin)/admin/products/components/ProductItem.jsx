// Third-party libs
import Image from 'next/image';

// App's components
import Button from '~/app/components/Button';

export default function ProductItem({ product }) {
    return (
        <div className='w-[944px] lg:w-full grid grid-cols-12 p-4 items-center'>
            <div className='col-span-5 flex gap-4 items-center'>
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/${product?.images[0]?.path}`}
                    alt='product-image'
                    width={64}
                    height={80}
                    className='rounded shadow'
                />
                <span>{product.name}</span>
            </div>
            <div className='col-span-2 text-center'>{product.collection.title}</div>
            <div className='col-span-1 text-center'>{product.quantity}</div>
            <div className='col-span-1 text-center'>{new Intl.NumberFormat('vi-VN').format(product.price)}</div>
            <div className='col-span-1 text-center'>{product.discount * 100}%</div>
            <div className='col-span-1 text-center'>
                <Button text>Edit</Button>
            </div>
            <div className='col-span-1 text-center'>
                <Button text className='text-red'>
                    Delete
                </Button>
            </div>
        </div>
    );
}
