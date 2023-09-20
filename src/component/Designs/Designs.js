import { useState } from "react"
import Modal from "../ImgModal/Modal";
import CustomModal from "../ImgModal/Modal";

export default function Designs(){
    const [data, setDate] = useState([{url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},

    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'necklace'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'earrings'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'chowki'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'},
    
    {url:'https://www.hazoorilaljewellers.com/eshop/media/wysiwyg/Gold_-min.jpg',type:'bangle'}]
    );
    const [selectedImg, setSelectedImg] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    return <div className="Designs">
        {
            data.map((item)=><div className="card">
            <img src={item.url} alt="Card Image" className="card-image" onClick={()=>{setSelectedImg(item.url);setIsOpen(!isOpen)}} />
            <div className="card-description">design</div>
          </div>)
        }

        <CustomModal onCancel={()=>{setIsOpen(!isOpen)}} visible={isOpen} imageUrl={selectedImg}></CustomModal>
    </div>
} 