import React from 'react'
import { Card } from 'antd'

function ServiceInfoCard() {
    return (
        <div className='container' >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', marginBottom: '60px'}}>
                <Card title="Connection" style={{ width: 300 }}>
                    <p>Connects waste collector with industries that use waste products in their manufactuering proccess</p>
                </Card>
                <Card title="Estimator" style={{ width: 300 }}>
                    <p>Calculates the cost-benifit of use of waste in manufacturing a product</p>
                </Card>
                <Card title="Pre-processing" style={{ width: 300 }}>
                    <p>WasteConnect provides the ability for companies to get their waste cleaned and shredded.</p>
                </Card>
            </div>
        </div>
    )
}

export default ServiceInfoCard
