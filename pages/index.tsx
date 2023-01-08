import Head from 'next/head'
import Cabecalho from '../components/cabecalho';

export default function HomePage() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Regulus | Escola de Astrologia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Cabecalho />
      <p>Teste</p>
    </div>
  );
}