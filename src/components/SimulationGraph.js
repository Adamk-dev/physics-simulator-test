import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export default function SimulationGraph({ simulationData }) {

  let data = [];
  for (let i = 0; i < simulationData.time.length; i++) {
    data.push({
      time: simulationData.time[i],
      solarTemp: simulationData.solarTemp[i],
      tankTemp: simulationData.tankTemp[i],
    })
  }

  return (
    <div className='simulation-wrapper'>
      <ResponsiveContainer width="70%" height={500} >
        <LineChart data={data} margin={{
          top: 15,
          right: 30,
          left: 20,
        }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: 'Time (minutes)', position: 'insideBottomRight', offset: -14 }} />
          <YAxis label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="tankTemp"
            name="Tank Temperature"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="solarTemp"
            name="Solar Heater Temperature"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
