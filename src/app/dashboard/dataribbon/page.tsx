import { Grid } from '@mui/material'
import React from 'react'
import DataCard from '../datacard/page';
import style from './../../page.module.css'

export default function DataRibbon() {
    return <>
        <Grid container gap={1} className={style.dataRibben}>
            <Grid>
                <DataCard title={"Total Sales"} value={'462'} description={'the total of all DataSoft products in the current financial year'} />
            </Grid>
            <Grid>
                <DataCard title={"Total Value"} value={'$25,732.256'} description={'the total Sales of the current financial year'} />
            </Grid>
            <Grid>
                <DataCard title={"avg. order value"} value={'$159.30'} description={'the average order values for all sales this current financial year'} />
            </Grid>
            <Grid>
                <DataCard title={"Conversion rate"} value={'0.61%'} description={'How many pitches become sales'} />
            </Grid>
           
        </Grid>
    </>
}
