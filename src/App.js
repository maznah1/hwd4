import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Component/Form';

const App=()=> {
const [Name,setName]=useState('');
const[img,setImg]=useState();
const [Prise,setPrise]=useState(0);
//const [coinList,setCoinList]=useState([])

  useEffect(() => {
     const fetchCoinsData = async () => {
      const request = await fetch('https://api.coincap.io/v2/assets');//'api.coincap.io/v2/assets'
      const data = await request.json();
      console.log(data.data);
      // let element=[...coinList]
      // for (let index = 0; index < 10; index++) {
      //    element.push(data.data[index])
      // }
      // setCoinList(element)
     setName(data.data[0].name);
      setImg(img);
     setPrise(data.data[0].priceUsd);
    };

    fetchCoinsData();
    }, []);
    
    useEffect(() => {
      const fetchImg = async () => {
        const request = await fetch('https://cryptoflash-icons-api.herokuapp.com/svg/color/eth');
        const data =  request;
        console.log(data);
      };
  
      fetchImg ();
      }, []);
  
  return (
    <div className='container text-center mt-5'>
      <Form img={img} Prise={Prise} Name={Name}/> 
      {/* {coinList.map((coin,index)=>{
        return <Form key={index}  Prise={coinList.price} Name={coinList.name}/>
      })
      }
      <Form></Form> */}
   </div>
  );
}

export default App;
