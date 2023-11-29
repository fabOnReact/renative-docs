import React from 'react';
import styles from './HomepageFeatures.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import CodeBlock from '@theme/CodeBlock';

const FeatureList = [
  {
    title: 'Extendable by community plugins',
    icon: '/img/light/feature_icon1.svg',
    iconDark: '/img/dark/feature_icon1.svg',
    description: (
      <>
        ReNative supports standard community driven <span style={{ color: '#0A74E6' }}>react native plugins</span> you can use to enhance
        the functionality of your apps.
      </>
    ),
    children:
      <div className={styles.plugin_grid}>
        <PluginItemComponent title='@flexn/create' codeSnippet='rnv plugin add @flexn/create   ' />
        <PluginItemComponent title='@flexn/sdk' codeSnippet='rnv plugin add @flexn/sdk  ' />
        <PluginItemComponent title='@lightningjs/cli' codeSnippet='rnv plugin add @lightningjs/cli  ' />
        <PluginItemComponent title='@reach/router' codeSnippet='rnv plugin add @reach/router  ' />
        <PluginItemComponent title='@react-navigation' codeSnippet='rnv plugin add @react-navigation  ' />
        <PluginItemComponent title='@reduxjs/toolkit' codeSnippet='rnv plugin add @reduxjs/toolkit  ' />
      </div>,
    link: "/docs",
  },
  {
    title: 'Scalable configurations',
    icon: '/img/light/feature_icon2.svg',
    iconDark: '/img/dark/feature_icon2.svg',
    description: (
      <>
        Tired of setting up and managing countless of various projects? You can go
        as simple as most <span style={{ color: '#0A74E6' }}>basic json config</span> file to get yourself up and running.
      </>
    ),
    link: "/docs",
  },
  {
    title: 'Minimalistic runtime',
    icon: '/img/light/feature_icon4.svg',
    iconDark: '/img/dark/feature_icon4.svg',
    description: (
      <>
        ReNative runtime, an <span style={{ color: '#0A74E6' }}>NPM dependency</span>, <span style={{ color: '#0A74E6' }}>streamlines UI</span> and feature development
        for diverse platforms and devices.
      </>
    ),
    children:
      <CodeBlock
        language="jsx">
        {`import { isPlatformTizen, isFactorTv, engine, platform } from "renative";\n\n<Text>{isFactorTv}</Text>; `}
      </CodeBlock>,
    link: "/docs",
  },
  {
    title: 'Supercharged frameworks',
    icon: '/img/light/feature_icon5.svg',
    iconDark: '/img/dark/feature_icon5.svg',
    description: (
      <>
        ReNative supports popular front-end frameworks like <span style={{ color: '#0A74E6' }}>React</span>, <span style={{ color: '#0A74E6' }}>React Native</span>, <span style={{ color: '#0A74E6' }}>NextJS</span>, <span style={{ color: '#0A74E6' }}>Electron</span>
      </>
    ),
    link: "/docs",
  },
  {
    title: 'Powerful templates',
    icon: '/img/light/feature_icon7.svg',
    iconDark: '/img/dark/feature_icon7.svg',
    description: (
      <>
        ReNative allows you to <span style={{ color: '#0A74E6' }}>build</span> powerful multi-platform bootstrap templates.
      </>
    ),
    children:
      <CodeBlock
        language="jsx">
        {`rnv new\n\n...\n\n? What template to use? => 'renative-template-hello-world'`}
      </CodeBlock>,
    link: "/docs",
  },
  {
    title: 'Powerful CLI',
    icon: '/img/light/feature_icon3.svg',
    iconDark: '/img/dark/feature_icon3.svg',
    description: (
      <>
        <span style={{ color: '#0A74E6' }}>Customize</span> your website layout using <span style={{ color: '#0A74E6' }}>React</span>. Docusaurus allows you to extend it
        while keeping the same header and footer.
      </>
    ),
    link: "/docs",
  },
  {
    title: 'Build hooks',
    icon: '/img/light/feature_icon6.svg',
    iconDark: '/img/dark/feature_icon6.svg',
    description: (
      <>
        Sometimes you need to extend CLI functionality with custom build scripts.
        ReNative <span style={{ color: '#0A74E6' }}>makes this easy</span> for you.
      </>
    ),
    children:
      <CodeBlock
        language="jsx">
        {`import chalk from 'chalk';\n\nconst hooks = {    
        hello: c =>       
              new Promise((resolve, reject) => {            
                      console.log(\`\\n$\{chalk.yellow('HELLO FROM BUILD HOOKS!')}\\n\`);
                      resolve();        
              })};\n
              const pipes = {};\n
              export { pipes, hooks };`}
      </CodeBlock>,
    link: "/docs",
  },
  {
    title: 'Integrations',
    icon: '/img/light/feature_icon8.svg',
    iconDark: '/img/dark/feature_icon8.svg',
    description: (
      <>
        ReNative supports integration for various services and <span style={{ color: '#0A74E6' }}>deployment infrastructures</span> for your apps.
      </>
    ),
    link: "/docs",
  },
];

const YoutubeVideo = ({ youtubeId, title }) => (
  <div
    className="wrapper"
    style={{
      margin: 'auto',
      marginBottom: 50
    }}
  >
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%' /* 16:9 */,
        height: 0
      }}
    >
      <iframe
        title={title || 'video'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
      />
    </div>
  </div>
);

function PluginItemComponent({ title, codeSnippet }) {
  return (
    <div className={styles.plugin_container}>
      <div>
        <p className={styles.plugin_title}>
          {title}
        </p>
        <CodeBlock
          language="jsx">
          {codeSnippet}
        </CodeBlock>
      </div>
    </div>
  );
}

function SectionItemComponent({ Svg, title, description, link, children, linkName='Learn more'}) {
  return (
    <div className={styles.feature_container}>
      <div className={styles.feature_title_container}>
        <img src={Svg} />
        <h2 className={styles.feature_title}>
          {title}
        </h2>
      </div>
      {description && (
        <p>
          {description}
        </p>
      )}
      {children}
      <a className={styles.feature_link} href={link}>{linkName}<img src='/img/link.svg' /></a>
    </div>
  );
}

export default function HomepageFeatures() {
  const { colorMode } = useColorMode();
  return (
    <>
      <div className={clsx("container", styles.img_video_container)} >
        <div className={styles.img_video_container_in}>
          <div className={styles.main_img_title}>
            <h2>Build react native app with ReNative framework</h2>
          </div>
          {colorMode === 'dark' ?
            <img className={styles.main_img} src='/img/dark/rnv-dark.svg' />
            :
            <img className={styles.main_img} src='/img/light/rnv-light.svg' />
          }
        </div>
        <div className={styles.img_video_container_in}>
          <YoutubeVideo youtubeId="PLCJzCDSyDk" title="demo" />
        </div>
      </div>

      <section className="container">
        <SectionItemComponent key='0' {...FeatureList[0]} Svg={colorMode === 'dark' ? FeatureList[0].iconDark : FeatureList[0].icon} linkName='Explore more'/>
        <div className={styles.features}>
          {FeatureList.slice(1).map((props, idx) => {
            const img = colorMode === 'dark' ? props.iconDark : props.icon;
            return <SectionItemComponent key={idx} {...props} Svg={img}/>
          })}
        </div>
      </section>
    </>
  );
}
