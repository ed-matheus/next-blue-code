import styles from './page.module.sass'
import Link from "next/link";

// Componentes
import Card from '@/components/card/Card';

// ícones
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className='w-full'>
      <div className={styles.banner_container}>
        <h1 className='mb-2 font-bold'>Transformamos Tecnologia em Soluções Reais.</h1>
        <h2 className='font-medium text-xl'>A BlueCode oferece ferramentas inovadoras para impulsionar sua empresa no mundo digital.</h2>

        <button className={styles.btn}>
          <Link href={'#'}>Saiba mais</Link>
        </button>
      </div>

      <div className={styles.benefits_section}>
        <Card
          icon={faMicrochip}
          title='Inovação em Tecnologia'
          description='Transformamos ideias em soluções tecnológicas avançadas, impulsionando o crescimento da sua empresa com inovação e criatividade.'
          alt='tecnologia'
        />

        <Card
          icon={faLightbulb}
          title='Soluções sob Medida'
          description='Desenvolvemos ferramentas personalizadas para atender às necessidades específicas do seu negócio, garantindo resultados eficientes.'
        />

        <Card
          icon={faHeadset}
          title='Suporte 24/7'
          description='Estamos disponíveis a qualquer momento para oferecer assistência técnica e garantir que sua operação nunca pare.'
        />
      </div>
    </div>
  );
}
