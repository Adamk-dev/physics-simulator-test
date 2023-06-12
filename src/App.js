import React, { useState } from 'react';
import InputsForm from './components/InputsForm';
import SimulationGraph from './components/SimulationGraph';

const SolarHeaterSimulation = () => {
  const [state, setState] = useState({
    initialWaterTemp: 0,
    initialSolarTemp: 0,
    ambientTemp: 0,
    tankVolume: 0,
    pumpFlowRate: 0,
    solarHeaterEfficiency: 0,
    heatLossRate: 0,
    simulationDuration: 0,
    timeStep: 0,
  });

  const [simulationData, setSimulationData] = useState({
    time: [0],
    tankTemp: [],
    solarTemp: [],
  });

  const {
    initialWaterTemp,
    initialSolarTemp,
    ambientTemp,
    tankVolume,
    pumpFlowRate,
    solarHeaterEfficiency,
    heatLossRate,
    simulationDuration,
    timeStep,
  } = state;

  const runSimulation = (event) => {
    event.preventDefault();
    if (
      !initialWaterTemp ||
      !initialSolarTemp ||
      !ambientTemp ||
      !tankVolume ||
      !pumpFlowRate ||
      !solarHeaterEfficiency ||
      !heatLossRate ||
      !simulationDuration ||
      !timeStep
    ) {
      alert('Please fill in all the required fields.');
      return;
    }

    const initialWaterTempValue = parseFloat(initialWaterTemp);
    const initialSolarTempValue = parseFloat(initialSolarTemp);
    const ambientTempValue = parseFloat(ambientTemp);
    const tankVolumeValue = parseFloat(tankVolume);
    const pumpFlowRateValue = parseFloat(pumpFlowRate);
    const solarHeaterEfficiencyValue = parseFloat(solarHeaterEfficiency);
    const heatLossRateValue = parseFloat(heatLossRate);
    const simulationDurationValue = parseInt(simulationDuration);
    const timeStepValue = parseInt(timeStep);

    const time = [0];
    const tankTemp = [initialWaterTempValue];
    const solarTemp = [initialSolarTempValue];

    for (let t = 0; t < simulationDurationValue; t += timeStepValue) {
      const netHeatTransfer = solarHeaterEfficiencyValue * pumpFlowRateValue * (solarTemp[solarTemp.length - 1] - tankTemp[tankTemp.length - 1]);

      const dT_dt =
        (netHeatTransfer - tankVolumeValue * heatLossRateValue * (tankTemp[tankTemp.length - 1] - ambientTempValue)) / tankVolumeValue;

      tankTemp.push(tankTemp[tankTemp.length - 1] + dT_dt * timeStepValue);
      solarTemp.push(solarTemp[solarTemp.length - 1] - (netHeatTransfer * timeStepValue) / (pumpFlowRateValue * tankVolumeValue));
      time.push(t + timeStepValue);
    }

    setSimulationData({ time, tankTemp, solarTemp });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Solar Heater Simulation</h1>

      <InputsForm state={state} handleChange={handleChange} runSimulation={runSimulation} />
      
      {simulationData.tankTemp.length > 0 && (
        <div>
          <SimulationGraph simulationData={simulationData} />
        </div>
      )}

    </div>

  )
}

export default SolarHeaterSimulation