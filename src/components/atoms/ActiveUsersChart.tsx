import React from 'react';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

interface Iprops {

}

const ActiveUsersChart: React.FC<Iprops> = (props) => {


    const data = [
        {
            "pv": 350,
        },
        {
            "pv": 250,
        },
        {
            "pv": 120,
        },
        {
            "pv": 310,
        },
        {
            "pv": 500,
        },
        {
            "pv": 400,
        },
        {
            "pv": 450,
        },
        {
            "pv": 280,
        },
        {
            "pv": 170,
        },
    ]

    return (

        <div className='rounded-xl p-[30px]' style={{ background: "linear-gradient(to top right, rgba(49, 56, 96, 0.9), rgba(21, 25, 40, 1))" }}>
            <ComposedChart margin={{ bottom: 0, left: 30, right: 0, top: 0 }} width={560} height={222} data={data}>
                <YAxis tickMargin={50} stroke={"var(--text-color-soft)"} />
                <Tooltip />
                <Bar radius={15} dataKey="pv" barSize={7} fill="#fff" />
            </ComposedChart>
        </div>

    )

}

export default ActiveUsersChart

