import Image from 'next/image';
import * as Button from './button';

export function Jumbotron() {
  return (
    <div className="container mx-auto flex h-[739px] flex-col items-center justify-center px-8 text-center">
      <Image
        alt="background"
        src="./background.png"
        fill
        className="absolute -z-10 max-h-[793px] object-cover"
      />

      <h1 className="text-primary mb-4 text-5xl font-semibold">Hunter Home Ventilation</h1>

      <p className="text-secondary mb-8 max-w-lg text-base">
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
