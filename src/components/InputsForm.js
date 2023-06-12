import React from 'react'

export default function InputsForm({ state, handleChange, runSimulation }) {
  return (
    <form>
      <div className='form-group'>
        <div>
          <label htmlFor="initialWaterTemp">Initial Water Temperature (°C):</label>
          <input type="number" name="initialWaterTemp" value={state.initialWaterTemp} onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="initialSolarTemp">Initial Solar Heater Temperature (°C):</label>
          <input type="number" name="initialSolarTemp" value={state.initialSolarTemp} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="ambientTemp">Ambient Temperature (°C):</label>
          <input type="number" name="ambientTemp" value={state.ambientTemp} onChange={handleChange} />
        </div>
      </div>
      <div className='form-group'>
        <div>
          <label htmlFor="tankVolume">Tank Volume (liters):</label>
          <input type="number" name="tankVolume" value={state.tankVolume} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="pumpFlowRate">Pump Flow Rate (liters/minute):</label>
          <input type="number" name="pumpFlowRate" value={state.pumpFlowRate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="solarHeaterEfficiency">Solar Heater Efficiency:</label>
          <input type="number" name="solarHeaterEfficiency" value={state.solarHeaterEfficiency} onChange={handleChange} />
        </div>
      </div>
      <div className='form-group'>
        <div>
          <label htmlFor="heatLossRate">Heat Loss Rate (°C/minute):</label>
          <input type="number" name="heatLossRate" value={state.heatLossRate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="simulationDuration">Simulation Duration (minutes):</label>
          <input type="number" name="simulationDuration" value={state.simulationDuration} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="timeStep">Time Step (minutes):</label>
          <input type="number" name="timeStep" value={state.timeStep} onChange={handleChange} />
        </div>
      </div>
      <button type='submit' onClick={runSimulation}>Run Simulation</button>
    </form>
  )
}
