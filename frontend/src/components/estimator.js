import React, { useState } from 'react'
import { Launch } from '@material-ui/icons'
import '../App.css'
import { Button, TextField} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';




function Estimator () {
    const [state, setState] = useState({
        brickNumber: 0,
        petFactor: 0.02,
        flyAshFactor: 0.2,
        cementFactor: 0.7,
        sandFactor: 0.08,

        cementFactorOriginal: 0.92,
        sandFactorOriginal: 0.08,

        petPrice: 3,
        flyAshPrice: 1,
        cementPrice: 100,
        sandPrice: 1,

        petCO2: 4,
        flyAshCO2: 0,
        cementCO2: 100,
        sandCO2: 0,

        currentPrice: 0,
        originalPrice:0,

        currentCO2: 0,
        originalCO2: 0,

        moneySaved: 0,
        CO2Saved: 0
    });
    
    const moneySaved = () => {
        setState(prevState => ({
            ...prevState,
            moneySaved: prevState.originalPrice - prevState.currentPrice,
            CO2Saved: prevState.originalCO2 - prevState.currentCO2
        }))
    }
    
    const calculateMoneySaved = () => {
        setState(prevState => ({
            ...prevState,
            currentPrice: (prevState.petFactor * prevState.brickNumber * prevState.petPrice) + (prevState.flyAshFactor * prevState.brickNumber * prevState.flyAshPrice) + (prevState.cementFactor * prevState.brickNumber * prevState.cementPrice) + (prevState.sandFactor * prevState.brickNumber * prevState.sandPrice),
            originalPrice: (prevState.cementFactorOriginal * prevState.brickNumber * prevState.cementPrice) + (prevState.sandFactorOriginal * prevState.brickNumber * prevState.sandPrice),

            currentCO2: (prevState.petFactor * prevState.brickNumber * prevState.petCO2) + (prevState.flyAshFactor * prevState.brickNumber * prevState.flyAshCO2) + (prevState.cementFactor * prevState.brickNumber * prevState.cementCO2) + (prevState.sandFactor * prevState.brickNumber * prevState.sandCO2),
            originalCO2: (prevState.cementFactorOriginal * prevState.brickNumber * prevState.cementCO2) + (prevState.sandFactorOriginal * prevState.brickNumber * prevState.sandCO2)
        }))
        moneySaved()
    }

    const updateBrickCount = () =>{
        let inputVal = document.getElementById("inputId").value;
        setState(prevState => ({
            ...prevState, brickNumber: inputVal
        }))
        calculateMoneySaved()
    }

    const clear = () => {
        setState(prevState => ({
            ...prevState, 
            brickNumber: 0,
            currentPrice: 0,
            originalPrice: 0,
            moneySaved: 0,
            CO2Saved: 0
        }))
    }

    
        function createData(thingy, otherThingy) {
            return { thingy, otherThingy };
          }
          
          const rows = [
            createData('You will save ', '$'+state.moneySaved.toFixed(2)),
            createData('You will prevent the release of ', state.CO2Saved.toFixed(2)+' grams of CO2'),
          ];

        return(
            <div className='CardItemContainer'>
                <div className='CardItems1'>
                    <div className='CardStructure'>
                        <span className='CardProductName'>Estimator</span>
                    </div>
    
                    <span className='CardSupplier'>Get an estimate of how much money you are saving</span>
    
    
                    <TextField placeholder="Number of Bricks" id="inputId"></TextField>
                    <Button className = "buttons" onClick={() => updateBrickCount()}> Estimate </Button>
                    <div className = "estimatorClear">
                        <Button className = "buttons" onClick={() => {clear(); document.getElementById("inputId").value=0}}> Clear </Button>
    
                    
                    </div>
    
    
                    <p className='CardLine'></p>
                    <div className='CardWeight'> 

                    <Table  aria-label="simple table">
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.thingy}>
                            <TableCell component="th" scope="row">
                                {<p style={{fontSize: '15px'}}>{row.thingy}<strong>{row.otherThingy}</strong></p>}
                            </TableCell>

                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </div> 
                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                        <Launch style={{ fontSize: 20 }} />
                    </div>
                </div>
            </div>
        )
                        }


export default Estimator