'use client';
import Image from 'next/image';
import FormHolder from './pages/form';
export default function Home() {
  return (
    <main>
      <div>
        {' '}
        <FormHolder
          onSubmit={function (data: FormData): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </main>
  );
}
