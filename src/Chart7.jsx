import React from 'react'
import {RadialBarChart,RadialBar, Legend, Tooltip}  from 'recharts'

const data = [ 
    {name: 'Jan',  value:400},
    {name: 'Feb',  value:200},
    {name: 'Mar',  value:300},
    {name: 'Apr',  value:400},
    {name: 'May',  value:500}
];

const Chart7 = () => {
  return (
    <div>
        <h2>this is a radial bar chart component</h2>

        <RadialBarChart height={500} width={500} data={data} cx="50%" cy="50%" innerRadius="50%"
        outerRadius="100%" barSize={50}>
            <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="value"
          />
          <Legend/>
          <Tooltip/>

        </RadialBarChart>
    
    </div>
  )
}

export default Chart7