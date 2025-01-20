interface RootProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  description: string;
}

export function Root({ title, description, ...props }: RootProps) {
  return (
    <div
      className="bg-semantic-positive-50 inset-ring-alpha-strong border-alpha-strong shadow-component-inner flex items-center gap-x-3 rounded-lg px-3 py-2.5 inset-ring"
      {...props}
    >
      <div className="bg-semantic-positive-500 my-1 h-full w-1 flex-none rounded-full"></div>
      <p className="text-secondary flex-1 text-[13px]">
        <span className="text-primary font-medium">{title}: </span>
        {description}
      </p>
    </div>
  );
}
