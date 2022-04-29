import Head from 'next/head';

interface Props {
  title: String;
}

export default function Header({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
