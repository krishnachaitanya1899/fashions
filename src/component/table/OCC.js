import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import io from 'socket.io-client';


import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';

const Table = () => {
  const [carData,setCars] = useState([]);
  const [refresh, setRefresh] = useState(1)
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
   axios.get("http://localhost:3001/products").then(res=>setProducts(res.data)).catch(err=>console.log(err))
   axios.get("http://localhost:3001/orders").then(res=>setOrders(res.data)).catch(err=>console.log(err))
  }, [refresh]);

    const queryClient = useQueryClient();

    const [columnDefs] = useState([
        { field: 'id' , editable:true},
        { field: 'name' ,editable:true},
        { field: 'price' ,editable:true}
    ]);

    const [columnDefsOrder] = useState([
        { field: 'order_id' , editable:true},
        { field: 'customer_name' ,editable:true},
        { field: 'total_amount' ,editable:true},
        { field: 'product_id' ,editable:true},
        { field: 'product_name' ,editable:true}
        
    ]);

    const handleProductchange = (event) => {
        const updatedData = event.data;
        console.log("updated data",updatedData);
    
        fetch(`http://localhost:3001/products/${updatedData.id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
            setRefresh(refresh + 1)
          console.log('API response:', data);

        })
        .catch(error => {
          console.error('API error:', error);
        });
      };


      const handleOrderChange = (event) => {
        const updatedData = event.data;
        console.log("updated data",updatedData);
    
        fetch(`http://localhost:3001/updateOrder/${updatedData.order_id}`, {
          method: 'PUT',
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
    


    console.log(products)
        return (
            <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
                {/* <AgGridReact
                    rowData={carData}
                    columnDefs={columnDefs}
                    onCellValueChanged={handleCellValueChanged}
                    >
                    
    
                </AgGridReact> */}
                   <hr></hr>
      <h1>Products</h1>
      <AgGridReact
        rowData={products}
        columnDefs={columnDefs}
        onCellValueChanged={handleProductchange}
      >
      </AgGridReact>
      <h1>orders</h1>
      <AgGridReact
        rowData={orders}
        columnDefs={columnDefsOrder}
        onCellValueChanged={handleOrderChange}
      >
      </AgGridReact>
            </div>
        );
   

    
   
  
};

export default Table;