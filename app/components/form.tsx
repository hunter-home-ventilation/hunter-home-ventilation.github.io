interface RootProps {
  children: React.ReactNode;
}

export function Root({ children }: RootProps) {
  return <div className="flex flex-col gap-y-6 flex-1">{children}</div>;
}

interface LabelProps {
  isRequired?: boolean;
  children: React.ReactNode;
}

export function Label({ isRequired, children }: LabelProps) {
  return (
    <label className="text-[13px] font-medium text-primary">
      {children}
      {isRequired && <span className="text-destructive ml-1">*</span>}
    </label>
  );
}

interface FieldProps {
  children: React.ReactNode;
}

export function Field({ children }: FieldProps) {
  return <div className="flex flex-col gap-y-2 w-full">{children}</div>;
}

type InputProps = React.ComponentPropsWithoutRef<'input'>;

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="h-10 border border-alpha-strong bg-white shadow-component-inner rounded-lg px-3 placeholder:text-tertiary text-primary text-sm"
    />
  );
}

type SelectProps = React.ComponentPropsWithoutRef<'select'>;

export function Select(props: SelectProps) {
  return (
    <select
      {...props}
      className="h-10 border border-alpha-strong bg-white shadow-component-inner rounded-lg px-3 placeholder:text-tertiary text-primary text-sm"
    />
  );
}

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'>;

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className="border border-alpha-strong bg-white shadow-component-inner rounded-lg px-3 placeholder:text-tertiary text-primary text-sm py-2.5"
    />
  );
}
