import React, { useRef } from 'react';
import styles from './App.module.scss';
import madison from './Madison';
import Header from './components/Header';
import Skill from './components/Skill';
import Period from './components/Peroid';
import Education from './components/Education';
import Divider from './components/Divider';
import TimeLine from './components/TimeLine';

function App() {
    const { current: person } = useRef(madison);
    return (
        <div className={styles.main}>
            <Header
                firstName={person.firstName}
                lastName={person.lastName}
                email={person.email}
                cellphone={person.cellphone}
            />
            <Divider title="Description" />
            <section>
                <div className={styles.description}>
                    {person.description?.map(d => (
                        <div className={styles.descriptionItem}>{d}</div>
                    ))}
                </div>
            </section>
            <Divider title="Skill" />
            <section>
                <div className={styles.skills}>
                    {person.skills?.map(skill => (
                        <Skill {...skill} />
                    ))}
                </div>
            </section>
            <Divider title="Professional Experience" />
            <section>
                <TimeLine periods={person.periods} />
            </section>
            <section>
                {person.reversedPeriods?.map(period => (
                    <Period
                        {...period}
                        companyName={period?.company?.name}
                    />
                ))}
            </section>
            <Divider title="Education Experience" />
            <section>
                {person.educations?.map(education => (
                    <Education {...education} />
                ))}
            </section>
        </div>
    );
}

export default App;
