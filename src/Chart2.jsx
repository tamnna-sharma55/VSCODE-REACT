import React from 'react'
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Legend,Tooltip} from 'recharts'

const data = [
    {name:'Jan' , value:400},
    {name:'Feb' , value:500},
    {name:'Mar' , value:300},
    {name:'Apr' , value:200},
    {name:'May' , value:300}
]


const Chart2 = () => {
  return (
    <div>
        <h2>this is a bar chart component</h2>
        <BarChart width={500} height={500} data={data}>
            <Bar dataKey="value" stroke='#d4db03' fill='#02db5d'/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="10 10" stroke='#02db5d'/>
            <Tooltip/>
            <Legend/>

        </BarChart>
    </div>
  )
}

export default Chart2