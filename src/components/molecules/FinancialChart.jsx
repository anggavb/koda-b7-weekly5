import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FinancialChart = ({ data, chartType = '' }) => {
  return (
    <div style={{ width: '100%', height: 400, background: '#fff', padding: '20px', borderRadius: '10px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
        >
          <CartesianGrid />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip cursor={{ fill: 'transparent' }} />
          
          { (chartType === 'Income' || chartType === 'All') && (
            <Bar 
              dataKey="income" 
              name="Income" 
              fill="#2563eb" 
              radius={[10, 10, 0, 0]} // Membuat ujung atas bulat
              barSize={30} 
            />
          )}
          
          {(chartType === 'Expense' || chartType === 'All') && (
            <Bar 
              dataKey="expense" 
              name="Expense" 
              fill="#dc2626" 
              radius={[10, 10, 0, 0]} 
              barSize={30} 
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinancialChart;
