import React from 'react'
import  {RadarChart,Radar,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Legend,Tooltip} from 'recharts'

const data = [
    {subject: 'Math' , A:90,B:70},
    {subject: 'Science' , A:80,B:75},
    {subject: 'English' , A:70,B:85},
    {subject: 'hindi' , A:60,B:65},
    {subject: 'History' , A:85,B:95},
     
]

const Chart5 = () => {
  return (
    <div>
        <h2>this is s radar chart</h2>
        <RadarChart height={500} width={500} data={data} cx="50%" cy="50%" outerRadius="70%">
        <Radar name='student a' dataKey="A" stroke='#dd45ff' fill='#2d34ff' fillOpacity={0.5} />
        <Radar name='student b' dataKey="B" stroke='#2d5fdd' fill='#3df4f3' />
        <PolarGrid/>
        <PolarAngleAxis/>
        <PolarRadiusAxis/>
        <Legend/>
        <Tooltip/>
    
        </RadarChart>
    </div>
  )
}

export default Chart5