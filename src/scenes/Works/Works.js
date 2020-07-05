import React from 'react'
import { PropTypes } from 'prop-types'
import { Element } from 'react-scroll'
import FontIcon from 'components/FontIcon'
import { useTranslation } from 'react-i18next'
import { styler, colors, breakpoints } from 'styles'

const companies = [
  {
    name: 'work.company.convergence.name',
    location: 'work.company.convergence.location',
    position: 'work.company.convergence.position',
    employmentType: 'work.company.convergence.employmentType',
    terms: 'work.company.convergence.terms',
    responsibilities: [
      'work.company.convergence.responsibility.1',
      'work.company.convergence.responsibility.2',
      'work.company.convergence.responsibility.3',
      'work.company.convergence.responsibility.4',
      'work.company.convergence.responsibility.5',
    ],
  },
  {
    name: 'work.company.makey.name',
    location: 'work.company.makey.location',
    position: 'work.company.makey.position',
    employmentType: 'work.company.makey.employmentType',
    terms: 'work.company.makey.terms',
    responsibilities: [
      'work.company.makey.responsibility.1',
      'work.company.makey.responsibility.2',
      'work.company.makey.responsibility.3',
      'work.company.makey.responsibility.4',
    ],
  },
  {
    name: 'work.company.mira.name',
    location: 'work.company.mira.location',
    position: 'work.company.mira.position',
    employmentType: 'work.company.mira.employmentType',
    terms: 'work.company.mira.terms',
    responsibilities: [
      'work.company.mira.responsibility.1',
      'work.company.mira.responsibility.2',
    ],
  },
  {
    name: 'work.company.anycolor.name',
    location: 'work.company.anycolor.location',
    position: 'work.company.anycolor.position',
    employmentType: 'work.company.anycolor.employmentType',
    terms: 'work.company.anycolor.terms',
    responsibilities: ['work.company.anycolor.responsibility.1'],
  },
  {
    name: 'work.company.itdesign.name',
    location: 'work.company.itdesign.location',
    position: 'work.company.itdesign.position',
    employmentType: 'work.company.itdesign.employmentType',
    terms: 'work.company.itdesign.terms',
    responsibilities: [
      'work.company.itdesign.responsibility.1',
      'work.company.itdesign.responsibility.2',
    ],
  },
]

const styles = styler({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 60px 80px',
    width: '100%',
    [breakpoints.phone]: {
      padding: '40px 30px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 80,
    [breakpoints.phone]: {
      marginLeft: 0,
    },
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    [breakpoints.phone]: {
      fontSize: 24,
      marginBottom: 20,
    },
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 300,
    marginBottom: 40,
    [breakpoints.phone]: {
      fontSize: 16,
      width: '100%',
    },
  },
  historyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  workContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 30px',
    borderRadius: 10,
    boxShadow: '0px 3px 6px #00000029',
    marginBottom: 20,
    width: '100%',
  },
  workTopContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
  },
  companyIcon: {
    fontSize: 20,
    color: colors.gray,
    marginRight: 20,
  },
  companyInfoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginRight: 30,
    [breakpoints.phone]: {
      flex: 2,
    },
  },
  companyName: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'left',
    [breakpoints.phone]: {
      fontSize: 16,
    },
  },
  companyLocation: {
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'left',
    [breakpoints.phone]: {
      fontSize: 14,
    },
  },
  positionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    [breakpoints.phone]: {
      flex: 1,
    },
  },
  position: {
    fontSize: 16,
    fontWeight: 300,
    marginBottom: 5,
    textAlign: 'right',
    [breakpoints.phone]: {
      fontSize: 14,
    },
  },
  terms: {
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'right',
    [breakpoints.phone]: {
      fontSize: 14,
    },
  },
  workBottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderTop: `1px solid ${colors.gray}`,
    paddingTop: 20,
    marginTop: 10,
  },
  workResponsibility: {
    fontSize: 14,
    fontWeight: 300,
  },
})

const Work = ({
  name,
  location,
  position,
  employmentType,
  terms,
  responsibilities,
}) => {
  const { t } = useTranslation()
  return (
    <div className={styles.workContainer}>
      <div className={styles.workTopContainer}>
        <FontIcon icon="building" className={styles.companyIcon} />
        <div className={styles.companyInfoContainer}>
          <h3 className={styles.companyName}>{t(name)}</h3>
          <aside className={styles.companyLocation}>{t(location)}</aside>
        </div>
        <div className={styles.positionContainer}>
          <aside className={styles.position}>
            {t(position)}({t(employmentType)})
          </aside>
          <aside className={styles.position}>{t(terms)}</aside>
        </div>
      </div>
      <div className={styles.workBottomContainer}>
        {responsibilities.map(x => (
          <li className={styles.workResponsibility}>{t(x)}</li>
        ))}
      </div>
    </div>
  )
}

const Works = () => {
  const { t } = useTranslation()
  return (
    <Element name="work">
      <div className={styles.root}>
        <div className={styles.container}>
          <h3 className={styles.title}>{t('work.title')}</h3>
          <aside className={styles.subtitle}>{t('work.subtitle')}</aside>
          <div className={styles.historyContainer}>
            {companies.map(x => (
              <Work key={x.name} {...x} />
            ))}
          </div>
        </div>
      </div>
    </Element>
  )
}

Works.propTypes = {
  style: PropTypes.shape({}),
}

Works.defaultProps = {
  style: {},
}

export default Works
