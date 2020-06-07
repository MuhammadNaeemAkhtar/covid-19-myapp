import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import styles from './Card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


function Cards( {data: {confirmed, recovered, deaths, lastUpdate }}) {
    //console.log(confirmed);
    if(!confirmed) {
        return "..loading";
    }

    return(
        <div className={styles.innerContainer}>
            <Card className={cx(styles.cardConfirmed, styles.card)}>
                <CardContent>
                    <Typography color="textSecondary">Confirmed Cases</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={1} separator=','></CountUp>
                    </Typography>
                </CardContent>
            </Card>
            
            <Card className={cx(styles.cardRecovered, styles.card)}>
                <CardContent>
                    <Typography color="textSecondary">Recovered Cases</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} duration={1} separator=','></CountUp>
                    </Typography>
                </CardContent>
            </Card>

            <Card className={cx(styles.cardRecoveryRate, styles.card)}>
                <CardContent>
                    <Typography color="textSecondary">Death Rate</Typography>
                    <Typography variant="h5">
                        {Math.round(deaths.value/confirmed.value*100)}%
                    </Typography>
                </CardContent>
            </Card>

            <Card className={cx(styles.cardDeaths, styles.card)}>
                <CardContent>
                    <Typography color="textSecondary">Recovery Rate</Typography>
                    <Typography variant="h5">
                        {Math.round(recovered.value/confirmed.value*100)}%
                    </Typography>
                </CardContent>
            </Card>
            
            <Card className={cx(styles.cardDeathRate, styles.card)}>
                <CardContent>
                    <Typography color="textSecondary">Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths.value} duration={1} separator=','></CountUp>
                    </Typography>
                </CardContent>
            </Card >
            
        </div>
    )
}

export default Cards;