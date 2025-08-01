import React from 'react'
import { PieChart,Pie,Tooltip,Legend,Cell } from 'recharts'


const data = [ 
    {name: 'Jan',  value:400},
    {name: 'Feb',  value:200},
    {name: 'Mar',  value:300},
    {name: 'Apr',  value:400},
    {name: 'May',  value:500}
];

const COLORS=['#0088FE','#00C49F','#FFBB28','#FF8042','#02db5d']
const Chart3 = () => {
  return (
    <div>
        <h1>this is piechart component</h1>
        <PieChart  height={500} width={500} data={data}>
            <Pie data={data} cx="50%" cy="50%" outerRadius={100} innerRadius={40} dataKey="value" label={true}>
                {data.map((element,index) =>(
                    <Cell key={`cell-${index}`} fill={COLORS [index % COLORS.length]}/>

                ) )}
            </Pie>
            <Tooltip/>
            <Legend/>
        </PieChart>
    </div>
  )
}

export default Chart3