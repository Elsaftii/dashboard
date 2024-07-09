import { Paper, Typography, IconButton ,Tooltip} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import React from 'react'
import style from './../../page.module.css'

export type DataCardProps={
    title: string;
    value:string;
    description:string;
}

export default function DataCard(props:DataCardProps) {
  const {title , value , description} = props;
  return <>
  <Paper className={style.dataCard}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography fontSize={"h6"} color={"lightslategrey"}>{title}</Typography>
                    <Tooltip title={<Typography fontSize={16}>{description}</Typography>}>
                        <IconButton>
                            <InfoIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
                <Typography fontSize={"h4"}>{value}</Typography>
            </Paper>
  
  </>
}
