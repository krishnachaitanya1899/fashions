import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const DemoTable = () => {
    const [cardata, setCarData] = useState([]);
    useEffect(() => {
        const socket = io('http://localhost:3001');

        console.log("useeffect")

        socket.on('connect', (message) => {
            console.log('Connected to Socket.IO server', message);
          });
      
          socket.on('carData', (data) => {
            console.log('Received car data:', data);
            setCarData(data);
          });

        socket.on('updatedMessage', (message) => {
            console.log(message);
            // Perform actions based on the updated message
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            {/* Your component content */}
        </div>
    );
};

export default DemoTable;
