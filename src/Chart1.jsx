import React from 'react'
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from 'recharts'

const data = [
    {name:'Jan' , value:400},
    {name:'Feb' , value:500},
    {name:'Mar' , value:300},
    {name:'Apr' , value:200},
    {name:'May' , value:300}
]

const Chart1 = () => {
  return (
    <div>
        <h1> this is a line chart component</h1>
        <LineChart height={500} width={500} data={data}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Line dataKey="value" type="monotone" stroke='#fcba03'> </Line>
        <CartesianGrid strokeDasharray="10 3"/>
        <Tooltip/>
        <Legend/>
        </LineChart>
    </div>
  )
}

export default Chart1