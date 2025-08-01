import React from 'react'
import {AreaChart,Area,Tooltip,Legend,XAxis,YAxis,CartesianGrid} from 'recharts'

const data = [
    {name:'Jan' , value:400},
    {name:'Feb' , value:500},
    {name:'Mar' , value:300},
    {name:'Apr' , value:200},
    {name:'May' , value:300}
]


const Chart4 = () => {
  return (
    <div>
        <h2>this is a area chart component</h2>
        <AreaChart width={500} height={500} data={data}>
        <Area dataKey="value" fill='#3fdd4f' type="monotone" />
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="5 5" stroke='#2f35dd'/>
        <Tooltip/>
        <Legend/>
        </AreaChart>
    </div>
  )
}

export default Chart4