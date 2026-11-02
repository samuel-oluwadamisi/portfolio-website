'use client'
import {
BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
ResponsiveContainer,
Legend, } from 'recharts';

const data = [ 
{ month: 'Jan', revenue: 1200, profit: 400 }, { month: 'Feb', revenue: 2100, profit: 800 }, { month: 'Mar', revenue: 1800, profit: 600 }, { month: 'Apr', revenue: 2600, profit: 1100 }, ];

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
<ResponsiveContainer width="50%" height={300}> <BarChart data={data}> <CartesianGrid strokeDasharray="3 3" /> <XAxis dataKey="month" /> <YAxis /> <Tooltip /> <Legend /> <Bar dataKey="revenue" fill="#8884d8" /> <Bar dataKey="profit" fill="#82ca9d" /> </BarChart> </ResponsiveContainer>
   </div>
  )
}

export default page