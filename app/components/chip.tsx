import React from 'react';

interface RootProps extends React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode;
}

export function Root(props: RootProps) {
  return (
    <a
      className="ps-2.5 pe-3 inline-flex items-center rounded-full font-medium text-sm h-8 shadow-component-inner cursor-pointer transition-colors bg-white text-primary inset-ring inset-ring-alpha-strong hover:bg-secondary-hover active:bg-secondary-active"
      {...props}
    />
  );
}

interface IconProps {
  icon: React.ReactElement;
}

export function Icon({ icon }: IconProps) {
  return React.cloneElement(icon, { className: 'size-4 text-secondary mr-2' });
}
