import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

interface Iprops {

}

const SalesOverviewChart: React.FC<Iprops> = (props) => {


    const data = [
        {
            "name": "Jan",
            "uv": 190,
            "pv": 500,
            "amt": 2400
        },
        {
            "name": "Feb",
            "uv": 220,
            "pv": 200,
            "amt": 2210
        },
        {
            "name": "Mar",
            "uv": 210,
            "pv": 185,
            "amt": 2290
        },
        {
            "name": "Apr",
            "uv": 350,
            "pv": 270,
            "amt": 2000
        },
        {
            "name": "Jun",
            "uv": 360,
            "pv": 220,
            "amt": 2181
        },
        {
            "name": "Jul",
            "uv": 450,
            "pv": 210,
            "amt": 2500
        },
        {
            "name": "Aug",
            "uv": 300,
            "pv": 250,
            "amt": 2100
        },
        {
            "name": "Sep",
            "uv": 350,
            "pv": 200,
            "amt": 2000
        },
        {
            "name": "Oct",
            "uv": 235,
            "pv": 110,
            "amt": 2181
        },
        {
            "name": "Nov",
            "uv": 300,
            "pv": 170,
            "amt": 2500
        },
        {
            "name": "Dec",
            "uv": 420,
            "pv": 120,
            "amt": 2100
        }
    ]

    return (


        <AreaChart width={883} height={300} data={data}
            margin={{ top: 0, right: 0, left: 24, bottom: 24 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2D3748" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis fontSize={10} tickMargin={24} dataKey="name" />
            <YAxis fontSize={10} tickMargin={24} />
            <CartesianGrid strokeWidth={0.3} strokeDasharray={"6 1"} vertical={false} />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#4FD1C5" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#2D3748" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart >

    )

}

export default SalesOverviewChart

