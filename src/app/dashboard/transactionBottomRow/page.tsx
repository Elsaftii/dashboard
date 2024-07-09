import React from 'react'
import stayel from './../../page.module.css'
import { Grid, Paper } from '@mui/material'
import DataChart from '@/medules/datachart/page'
import { doughnutChartData } from '@/app/mockData'

export default function TransactionBottonmRow() {
  return <>
   <Grid container className={stayel.bottomRow}>
      <Grid>
        <Paper className={stayel.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={stayel.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={stayel.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={stayel.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  </>
}
