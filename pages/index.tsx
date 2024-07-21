import HomePage from '@/app/modules/home/HomePage';
import Layout from '@/app/layouts/Layout';

export default function Home() {
  return (
    <Layout isProtected>
      <HomePage />
    </Layout>
  )
}
