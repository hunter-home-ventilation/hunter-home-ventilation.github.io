import Image from 'next/image';
import * as Button from './button';

export function Jumbotron() {
  return (
    <div className="container mx-auto h-[739px] flex flex-col items-center justify-center text-center px-8">
      <Image
        alt="background"
        src="/background.png"
        fill
        className="absolute max-h-[793px] -z-10 object-cover"
      />

      <h1 className="text-5xl font-semibold mb-4 text-primary">Hunter Home Ventilation</h1>

      <p className="text-secondary text-base max-w-lg mb-8">
        Low cost whole house ventilation that meets building regulations, saves energy and prevents
        condensation.
      </p>

      <div className="flex flex-col gap-y-6">
        <div className="flex gap-x-2">
          <Button.Root variant="primary">Get a Drimaster</Button.Root>
          <Button.Root variant="secondary">Request survey</Button.Root>
        </div>

        <p className="text-secondary text-[13px]">Surveys are free, with no obligation</p>
      </div>
    </div>
  );
}
