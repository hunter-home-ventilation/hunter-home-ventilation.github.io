import Link from 'next/link';

interface RootProps {
  children: React.ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <nav className="h-16 w-full px-8">
      <div className="container mx-auto h-full flex justify-end items-center gap-x-2">
        {children}
      </div>
    </nav>
  );
}

interface ItemProps {
  children: React.ReactNode;
}

export function Item({ children }: ItemProps) {
  return (
    <Link
      href="#"
      className="rounded-md px-4 h-10 inline-flex items-center justify-center text-secondary text-[13px] font-medium hover:bg-ghost-hover active:bg-ghost-active"
    >
      {children}
    </Link>
  );
}
