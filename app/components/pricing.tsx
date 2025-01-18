import { RiCheckFill } from '@remixicon/react';
import clsx from 'clsx';

interface RootProps {
  children: React.ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <div className="flex flex-col gap-y-12 px-8">
      <div className="container mx-auto grid gap-x-8 xl:gap-x-16 gap-y-8 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
      <p className="text-secondary text-xs text-center">
        *Unit comes with 5 year warranty, which is extended to 7 years if filters are replaced after
        5 years.
      </p>
    </div>
  );
}

interface CardProps {
  product: string;
  description: string;
  prominent?: boolean;
  price: number;
  children: React.ReactNode;
}

export function Card({ product, description, prominent, price, children }: CardProps) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-y-4 p-8 ring ring-black/5 rounded-2xl shadow-sm h-[600px] flex-1 items-center',
        {
          'bg-white': !prominent,
          'bg-brand text-white': prominent,
        },
      )}
    >
      <div className="flex flex-col gap-y-6 flex-1 w-full">
        <div className="flex flex-col gap-y-2">
          <h3
            className={clsx('font-semibold text-xl', {
              'text-primary': !prominent,
              'text-white': prominent,
            })}
          >
            {product}
          </h3>
          <p
            className={clsx('text-sm', {
              'text-secondary': !prominent,
              'text-white/90': prominent,
            })}
          >
            {description}
          </p>
        </div>

        <ul className="flex flex-col flex-">{children}</ul>
      </div>

      <div className="flex flex-col gap-y-6 w-full">
        <div className="flex gap-x-1 items-baseline">
          <p
            className={clsx('font-semibold text-[40px]', {
              'text-primary': !prominent,
              'text-white': prominent,
            })}
          >
            £{price}
          </p>
          <span
            className={clsx('text-[13px]', {
              'text-secondary': !prominent,
              'text-white/90': prominent,
            })}
          >
            per unit
          </span>
        </div>

        {/* <Button.Root variant={prominent ? 'secondary' : 'primary'} className="w-full">
          Buy now
        </Button.Root> */}
      </div>
    </div>
  );
}

interface Feature {
  children: React.ReactNode;
}

export function Feature({ children }: Feature) {
  return (
    <li className="h-11 flex gap-x-2 items-center">
      <RiCheckFill className="size-5" />
      {children}
    </li>
  );
}
