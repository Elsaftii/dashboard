import React from 'react'
import css from './Dashboard.module.css'
import { Box, Grid, Paper } from '@mui/material'
import DataRibbon from './dataribbon/page'
import TransactionPerDay from './transactionperday/page'
import TransactionBottonmRow from './transactionBottomRow/page'

export default function Dashboard() {
  return <>
    {/* { <Box sx={{ flexGrow: 1 }}>
    <Grid  container gap={2} className={css.topCardsContainer}>
      <Grid >
        <Paper  className={css.dataCard}>xs=4</Paper>
      </Grid>
      <Grid  >
        <Paper className={css.dataCard}>xs=4</Paper>
      </Grid>
      <Grid  >
        <Paper className={css.dataCard}>xs=4</Paper>
      </Grid>
    </Grid>
    <Grid xs={12} marginY={2}>
    <Paper className={css.dataCard}>xs=8</Paper>
    </Grid>
  </Box>  */



      //  <Box sx={{ flexGrow: 1 }} paddingY ={2}>
      //    <Grid container spacing={2} >
      //      <Grid item xs={4}>
      //        <Paper className={css.dataCard}>xs=4</Paper>
      //      </Grid>
      //      <Grid item xs={4}>
      //        <Paper className={css.dataCard}>xs=4</Paper>
      //      </Grid>
      //      <Grid item xs={4}>
      //        <Paper className={css.dataCard}>xs=4</Paper>
      //      </Grid>
      //      <Grid item xs={12}>
      //        <Paper className={css.dataCard}>xs=8</Paper>
      //      </Grid>
      //    </Grid>
      //  </Box>

      <Box >
        <DataRibbon/>
        <TransactionPerDay/>
        <TransactionBottonmRow/>
      </Box>
    }
  </>
}
