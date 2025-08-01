import React from 'react'
import {ScatterChart,Scatter,XAxis,YAxis,CartesianGrid,Legend,Tooltip} from 'recharts'
const data = [
    {name:'Jan' , value:400},
    {name:'Feb' , value:500},
    {name:'Mar' , value:300},
    {name:'Apr' , value:200},
    {name:'May' , value:300}
]




const Chart6 = () => {
  return (
    <div>
        <h2>this is a scattered chart</h2>
        <ScatterChart height={500} width={500} data={data}>
            <Scatter dataKey="value"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="5 5" stroke='#86cf11'/>
            <Legend/>
            <Tooltip />

        </ScatterChart>
    </div>
  )
}

export default Chart6