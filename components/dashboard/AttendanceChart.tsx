// components/dashboard/AttendanceChart.tsx
'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Week 1', attendance: 400 },
  { name: 'Week 2', attendance: 300 },
  { name: 'Week 3', attendance: 500 },
  { name: 'Week 4', attendance: 280 },
  { name: 'Week 5', attendance: 390 },
];

const AttendanceChart: React.FC = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='attendance' fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceChart;
