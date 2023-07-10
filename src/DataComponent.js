
// // import React, { useEffect, useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // const DataComponent = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('http://localhost:3306/time');
// //         const responseData = await response.json();
// //         setData(responseData.slice(0, 15));
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const formatXAxis = (tickItem) => {
// //     const date = new Date(tickItem);
// //     const hour = date.getHours();
// //     const minute = date.getMinutes();
// //     return `${hour}:${minute}`;
// //   };

// //   const chartData = data.map((item) => ({
// //     time: item.TIME_LOG,
// //     siPercentage: item.PRED_SI_PER,
// //     o2Enrichment: item.O2_ENRICHMENT,
// //     pci: item.PCI,
// //     raft: item.RAFT,
// //   }));

// //   return (
// //     <div>
// //     <div style={{ width: '50%', height: '400px' }}>
// //       <ResponsiveContainer>
// //         <LineChart data={chartData}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="time" tickFormatter={formatXAxis} />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />
// //           <Line type="monotone" dataKey="siPercentage" name="SI Percentage" stroke="#8884d8" />
// //         </LineChart>
// //       </ResponsiveContainer>
// //     </div>
// //     <div style={{ width: '50%', height: '400px' }}>
// //       <ResponsiveContainer>
// //         <LineChart data={chartData}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="time" tickFormatter={formatXAxis} />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />
// //           <Line type="monotone" dataKey="o2Enrichment" name="O2 Enrichment" stroke="#82ca9d" />
// //         </LineChart>
// //       </ResponsiveContainer>
// //     </div>
// //     <div style={{ width: '50%', height: '400px' }}>
// //       <ResponsiveContainer>
// //         <LineChart data={chartData}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="time" tickFormatter={formatXAxis} />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />
// //           <Line type="monotone" dataKey="pci" name="PCI" stroke="#ffc658" />
// //         </LineChart>
// //       </ResponsiveContainer>
// //     </div>
// //     <div style={{ width: '50%', height: '400px' }}>
// //       <ResponsiveContainer>
// //         <LineChart data={chartData}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="time" tickFormatter={formatXAxis} />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />
// //           <Line type="monotone" dataKey="raft" name="RAFT" stroke="#ff6b6b" />
// //         </LineChart>
// //       </ResponsiveContainer>
// //     </div>
// //   </div>
      
    
// //   );
// // };

// // export default DataComponent;

// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const DataComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3306/time');
//         const responseData = await response.json();
//         setData(responseData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const formatXAxis = (tickItem) => {
//     const date = new Date(tickItem);
//     const hour = date.getHours();
//     const minute = date.getMinutes();
//     return `${hour}:${minute}`;
//   };

//   const chartData = data.slice(0, 15).map((item) => ({
//     time: item.TIME_LOG,
//     siPercentage: item.PRED_SI_PER,
//     o2Enrichment: item.O2_ENRICHMENT,
//     pci: item.PCI,
//     raft: item.RAFT,
//   }));

//   return (
//     <div className='row'>
//     <div className='bg-black d-flex flex-row '>
//       <div style={{ width: '50%', height: '400px' }}>
//         <ResponsiveContainer>
//           <LineChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="time" tickFormatter={formatXAxis} />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="siPercentage" name="SI Percentage" stroke="#8884d8" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//       <div style={{ width: '50%', height: '400px' }}>
//         <ResponsiveContainer>
//           <LineChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="time" tickFormatter={formatXAxis} />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="o2Enrichment" name="O2 Enrichment" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//       </div>
//        <div className='bg-black d-flex flex-row'>
//       <div style={{ width: '50%', height: '400px' }}>
//         <ResponsiveContainer>
//           <LineChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="time" tickFormatter={formatXAxis} />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="pci" name="PCI" stroke="#ffc658" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//       <div style={{ width: '50%', height: '400px' }}>
//         <ResponsiveContainer>
//           <LineChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="time" tickFormatter={formatXAxis} />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="raft" name="RAFT" stroke="#ff6b6b" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default DataComponent;



import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3306/time');
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${minute}`;
  };

  const chartData = data.slice(0, 15).reverse().map((item) => ({
    time: item.TIME_LOG,
    siPercentage: item.PRED_SI_PER,
    o2Enrichment: item.O2_ENRICHMENT,
    pci: item.PCI,
    raft: item.RAFT,
  }));

  return (
    <div className='container-fluid bg-black'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>SI Percentage</h5>
              <ResponsiveContainer width='100%' height={400}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='time' tickFormatter={formatXAxis} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type='monotone' dataKey='siPercentage' name='Time(hh:mm)' stroke='#8884d8' />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>O2 Enrichment</h5>
              <ResponsiveContainer width='100%' height={400}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='time' tickFormatter={formatXAxis} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type='monotone' dataKey='o2Enrichment' name='Time(hh:mm)' stroke='#82ca9d' />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>PCI</h5>
              <ResponsiveContainer width='100%' height={400}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='time' tickFormatter={formatXAxis} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type='monotone' dataKey='pci' name='Time(hh:mm)' stroke='#ffc658' />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>RAFT</h5>
              <ResponsiveContainer width='100%' height={400}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='time' tickFormatter={formatXAxis} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type='monotone' dataKey='raft' name='Time(hh:mm)' stroke='#ff6b6b' />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataComponent;

