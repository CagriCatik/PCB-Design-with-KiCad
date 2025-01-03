import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [

/* This example demonstrates how to include an SVG image in a feature
  {
    title: 'Intuitive Schematic Capture',
    Svg: require('@site/static/img/undraw_schematic_capture.svg').default,
    description: (
      <>
        KiCad8 offers a user-friendly interface for creating detailed schematics, enabling you to design complex circuits with ease and precision.
      </>
    ),
  },
*/

  {
    title: 'Intuitive Schematic Capture',
    description: (
      <>
        KiCad8 offers a user-friendly interface for creating detailed schematics, enabling you to design complex circuits with ease and precision.
      </>
    ),
  },
  {
    title: 'Advanced PCB Layout Tools',
    description: (
      <>
        Utilize KiCad8's powerful PCB layout features to arrange components optimally, manage layers efficiently, and ensure high-quality routing for your designs.
      </>
    ),
  },
  {
    title: 'Comprehensive Library Support',
    description: (
      <>
        Access an extensive library of components and symbols, or create and import your own, to streamline the PCB design process and maintain consistency across projects.
      </>
    ),
  },
  {
    title: '3D Visualization',
    description: (
      <>
        Preview your PCB designs in 3D to identify potential issues, verify component placement, and ensure the aesthetic appeal of your final product.
      </>
    ),
  },
  {
    title: 'Collaborative Design Workflow',
    description: (
      <>
        KiCad8 supports collaborative features, allowing multiple team members to work on the same project simultaneously, enhancing productivity and reducing design time.
      </>
    ),
  },
  {
    title: 'Open Source and Extensible',
    description: (
      <>
        Being open-source, KiCad8 allows for extensive customization and integration with other tools, ensuring that your PCB design environment can evolve with your needs.
      </>
    ),
  },
];


function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      {/*
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
