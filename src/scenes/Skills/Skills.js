import React from 'react'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
import InView from 'components/InView'
import { styler, colors, breakpoints } from 'styles'
import { Radar } from 'components/Chart'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '80px 60px',
    background: colors.lightGray,
    [breakpoints.phone]: {
      padding: '40px 30px',
    },
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.blackGray,
    marginBottom: 30,
    [breakpoints.phone]: {
      fontSize: 24,
    },
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 60,
    [breakpoints.phone]: {
      fontSize: 16,
    },
  },
  skillContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  radar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 16,
  },
})

const data = [
  {
    title: 'skills.mobile.title',
    labels: [
      'Swift',
      'Objective-C',
      'CocoaPods',
      'React Native',
      'Javascript',
      'Java',
    ],
    datasets: [
      {
        data: [95, 80, 90, 85, 90, 60],
        backgroundColor: 'rgba(28, 115, 232, .4)',
        borderColor: colors.blue,
      },
    ],
  },
  {
    title: 'skills.web.title',
    labels: ['React', 'Redux', 'GraphQL', 'Firebase', 'HTML', 'CSS', 'PHP'],
    datasets: [
      {
        data: [95, 90, 80, 90, 80, 80, 70],
        backgroundColor: 'rgba(28, 115, 232, .4)',
        borderColor: colors.blue,
      },
    ],
  },
  {
    title: 'skills.backend.title',
    labels: [
      'Node',
      'GraphQL',
      'Mongoose',
      'MongoDB',
      'PostgreSQL/MySQL',
      'AWS',
    ],
    datasets: [
      {
        data: [80, 80, 70, 80, 80, 40],
        backgroundColor: 'rgba(28, 115, 232, .4)',
        borderColor: colors.blue,
      },
    ],
  },
  {
    title: 'skills.design.title',
    labels: ['AdobeXD', 'Sketch', 'Zeplin', 'Potoshop', 'Illustrator'],
    datasets: [
      {
        data: [80, 70, 80, 30, 30],
        backgroundColor: 'rgba(28, 115, 232, .4)',
        borderColor: colors.blue,
      },
    ],
  },
]

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const getVariants = ({ delay }) => ({
  hidden: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      ...transition,
    },
  },
})

const Skills = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{t('skills.title')}</h2>
      <aside className={styles.subtitle}>{t('skills.subtitle')}</aside>
      <div className={styles.skillContainer}>
        {data.map((x, i) => (
          <InView key={i.toString()} variants={getVariants({ delay: 0.3 * i })}>
            <h4 className={styles.chartTitle}>{t(x.title)}</h4>
            <Radar data={x} className={styles.radar} />
          </InView>
        ))}
      </div>
    </div>
  )
}

Skills.propTypes = {
  style: PropTypes.shape({}),
}

Skills.defaultProps = {
  style: {},
}

export default Skills
