import { RiFacebookFill } from '@remixicon/react';

export function Root() {
  return (
    <div className="bg-secondary-hover">
      <div className="px-10 py-6 container mx-auto flex justify-between items-center">
        <span className="text-secondary text-[13px]">
          © {new Date().getFullYear()} Hunter Home Ventilation. All rights reserved.
        </span>

        <div className="flex gap-x-4">
          <a href="#" className="text-secondary hover:text-primary">
            <RiFacebookFill className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
