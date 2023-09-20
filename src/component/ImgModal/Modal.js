import React, { useState } from 'react';
import { Modal } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const CustomModal = ({ visible, title, imageUrl, onCancel }) => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel + 10);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel - 10);
  };

  const handleDragStart = (e) => {
    const { clientX, clientY } = e;
    const rect = e.target.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleDrag = (e) => {
    const { clientX, clientY } = e;
    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;
    setDragOffset({ x: newX, y: newY });
  };

  return (
    <Modal
      visible={visible}
      title={title}
      onCancel={onCancel}
      footer={null}
      centered
      maskClosable={false}
      width={600}
      bodyStyle={{ padding: 0 }}
      className="custom-modal"
    >
      <div
        style={{overflow:'scroll', width:'100%', height:'50%'}}
        className="image-container"
        draggable="true"
        onDragStart={handleDragStart}
        onDrag={handleDrag}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{ width: `${zoomLevel}%` }}
        />
        <div className="zoom-buttons">
          <button onClick={handleZoomIn}>
            <PlusOutlined />
          </button>
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 10}
          >
            <MinusOutlined />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
