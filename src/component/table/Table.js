import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import io from 'socket.io-client';


import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Table2 = () => {
  const [carData, setCars] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [columnDefs] = useState([
    { field: 'id', editable: true },
    { field: 'make', editable: true },
    { field: 'model', editable: true }
  ]);
const [columnDefsOrder] = useState([
    { field: 'order_id' , editable:true},
    { field: 'customer_name' ,editable:true},
    { field: 'total_amount' ,editable:true},
    { field: 'product_id' ,editable:true},
    { field: 'product_name' ,editable:true}
    
]);
  useEffect(() => {
    // Connect to the server using Socket.IO
    const socket = io("http://localhost:3001");
    // Listen for updates from the server
    socket.on('carData', (data) => {
      // Update the state with the updated car data
      setCars(data);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const queryClient = useQueryClient();



  const handleCellValueChanged = (event) => {
    // Get the updated data from the event
    const updatedData = event.data;
    console.log("updated data", updatedData);

    // Make your API call here to update the backend server with the new data
    // For example:
    fetch('http://localhost:3001/cars', {
      method: 'POST',
      body: JSON.stringify(updatedData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);
      })
      .catch(error => {
        console.error('API error:', error);
      });
  };

  // const fetchData = async () => {
  //     const response = await fetch('http://localhost:3001/cars');
  //     return response.json();
  //   };

  //   const { data, isLoading } = useQuery('carsList', fetchData, {
  //     // refetchInterval: 4000, // Refresh the data every 1 minute (60000 milliseconds)
  //     staleTime: 60000, // Consider data stale after 1 minute (optional, you can adjust as needed)
  //   });

  // //   const mutation = useMutation(handleCellValueChanged, {
  // //     onSuccess: () => {
  // //       // Trigger a background refetch when the mutation is successful
  // //       queryClient.invalidateQueries('carsList');
  // //     },
  // //   });

  // //   const handleUpdateData = async (updatedData) => {
  // //     await mutation.mutateAsync(updatedData);
  // //   };

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }
  //   if(data){
    console.log("carData", carData)
  return (
    <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
      <hr></hr>
      <h1>Products</h1>
      <AgGridReact
        rowData={carData}
        columnDefs={columnDefs}
        onCellValueChanged={handleCellValueChanged}
      >
      </AgGridReact>
      {/* <h1>orders</h1> */}
      {/* <AgGridReact
        rowData={carData}
        columnDefs={columnDefsOrder}
        onCellValueChanged={handleCellValueChanged}
      >
      </AgGridReact> */}
    </div>

  );
  // }


  // useEffect(()=>{
  //     fetch('http://192.168.55.107:3001/cars',{
  //         method: 'GET',
  //         headers:{
  //             'Content-Type': 'application/json'
  //         }
  //     }).then(response => response.json()).then(res=>{
  //         console.log(res);
  //         setRowData(res)}).catch(err=>console.log(err))
  // },[])



};

export default Table2;