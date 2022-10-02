import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChBarChartart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart } from 'recharts';


const PhoneBar = () => {
    const [phones, setPhones] = useState({});
    
    useEffect(() => {
        // fetch(` https://openapi.programming-hero.com/api/phones?search=iphone`)
        // .then(res => res.json())
        // .then(data => console.log(data))
        axios.get(` https://openapi.programming-hero.com/api/phones?search=iphone`)
        .then(data => {
            const phonesLoaded = data?.data?.data;
            const phonesData = phonesLoaded.map(phone => {
                const parts = phone?.slug.split('-');
                const price = parseInt(parts[1]);
                const singlePhone = {
                    name: phone?.phone_name,
                    price: price,
                }
                return singlePhone;
            })
            setPhones(phonesData);
        });
    }, [])
    return (
        <div>
            <BarChart width={800} height={400} data={phones}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default PhoneBar;