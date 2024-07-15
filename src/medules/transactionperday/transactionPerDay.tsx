"use client"
import { Card, Grid, Paper, Typography, useTheme } from '@mui/material';
import React from 'react'
import styles from './../../page.module.css'
import DataChart from '../datachart/datachart';
import { lineChartData } from '../../app/mockData';



export type TransactionCardType={
    title:string;
    value:string;
    changeValue:string;
}


export default function TransactionPerDay() {
    const theme = useTheme()
  return <>
  <Grid container gap={2} className={styles.Wrapper}>
    <Paper className={styles.transaction}>
        <div className={styles.chart}>
            <Typography>Transaction per day</Typography>
            <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={styles.cardWrapper}>
            <Card className={styles.card} variant={'outlined'}>
                <div className={styles.cardTitle}>
                    <Typography>Total products</Typography>
                </div>
                <div className={styles.cardValue}>
                    <Typography>1.275</Typography>
                    <Typography color={theme.palette.success.main} fontSize={14}>428.7%</Typography>
                </div>
            </Card>
            <Card className={styles.card} variant={'outlined'}>
                <div className={styles.cardTitle}>
                    <Typography>Buy-to-detail</Typography>
                </div>
                <div className={styles.cardValue}>
                    <Typography>4.40%</Typography>
                    <Typography color={theme.palette.success.main} fontSize={14}>899.4%</Typography>
                </div>
            </Card>
            <Card className={styles.card} variant={'outlined'}>
                <div className={styles.cardTitle}>
                    <Typography>Refunds</Typography>
                </div>
                <div className={styles.cardValue}>
                    <Typography>0</Typography>
                    <Typography color={theme.palette.success.main} fontSize={14}>0</Typography>
                </div>
            </Card>
        </div>
    </Paper>
  </Grid>
  
  </>
}











