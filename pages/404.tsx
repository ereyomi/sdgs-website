// 404.js
import Layout from '@components/common/layout';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <Layout cssClasses="w-full min-h-[70vh] grid place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-secondary text-2xl">
          <span className="font-bold">404 </span>| Page Not Found
        </h1>
        <Link href="/">
          <a className="font-secondary text-md p-2 block bg-red-400 hover:bg-red-600 rounded-lg text-white">
            Go back home
          </a>
        </Link>
      </div>
    </Layout>
  );
}