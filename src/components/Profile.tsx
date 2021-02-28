import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesConext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/LuizFernandin.png" alt="Luiz Fernando"/>
            <div>
                <strong>Luiz Fernando</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}