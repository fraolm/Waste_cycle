import React from 'react'
import '../App.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';




function Estimator (amountIN) {
    const vals = {
        brickNumber: amountIN,
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
    };

    const state = {
        currentPrice: (vals.petFactor * vals.brickNumber * vals.petPrice) + (vals.flyAshFactor * vals.brickNumber * vals.flyAshPrice) + (vals.cementFactor * vals.brickNumber * vals.cementPrice) + (vals.sandFactor * vals.brickNumber * vals.sandPrice),
        originalPrice: (vals.cementFactorOriginal * vals.brickNumber * vals.cementPrice) + (vals.sandFactorOriginal * vals.brickNumber * vals.sandPrice),

        currentCO2: (vals.petFactor * vals.brickNumber * vals.petCO2) + (vals.flyAshFactor * vals.brickNumber * vals.flyAshCO2) + (vals.cementFactor * vals.brickNumber * vals.cementCO2) + (vals.sandFactor * vals.brickNumber * vals.sandCO2),
        originalCO2: (vals.cementFactorOriginal * vals.brickNumber * vals.cementCO2) + (vals.sandFactorOriginal * vals.brickNumber *vals.sandCO2)
    }

    const saved = {
        moneySaved: state.originalPrice - state.currentPrice,
        CO2Saved: state.originalCO2 - state.currentCO2
    }

    function createData(thingy, otherThingy) {
        return { thingy, otherThingy };
        }
        
    const rows = [
    createData('You have saved ', '$'+saved.moneySaved.toFixed(2)),
    createData('You were spending ', '$'+state.originalPrice.toFixed(2)),
    createData('You have prevented the release of ', saved.CO2Saved.toFixed(2)+' grams of CO2')
    ];

        return(

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
        )
                        }


export default Estimator