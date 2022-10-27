import React,  { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import axios from "axios";
import styles from "./DoanhThu.module.css"

import { useNavigate } from "react-router-dom";
// import ViewXemhodon from "./ViewXemHoaDon"


// import {isToggled} from'../../features/ChiNhanh/ChiNhanh'
const DoanhThu = () => {


    const navigate = useNavigate();
  const [isToggledd, setisToggledd] =useState(false);
  
//   const [Chitiethoadon, setChitiethoadon]= useState([]);
  
  const [Data, setData] = useState([]);
  const [RowData, SetRowData] = useState([])

  const [ViewShow, SetViewShow] = useState(false)
  const [ViewShoww, SetViewShoww] = useState(false)
 

 




const [Manghoadon, setManghoadon]= useState([])
// const [Mangdoanhthu, setMangdoanhthu]= useState([])


var Chitiethoadon=[];
const setChitiethoadon = (item)=> {
    Chitiethoadon.push(item);
}



var Manggop=[]

  var Tenchinhanh= localStorage.getItem("TenChiNhanh");
  console.log("chinhanh",Tenchinhanh)
  var ChiNhanh=Tenchinhanh;


  const Getallhoadon = async () => {

    const url = `http://localhost:5001/HoaDon`
    axios.get(url)
              .then(response => {
                  const result = response.data;
                  const { status, message, data } = result;
                  if (status !== 'SUCCESS') {
                      alert(message, status)
                  }
                  else {
                    setManghoadon(data)

                    
                      console.log(data)
                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }





          


       
    

    

    useEffect(() => {
           
            Getallhoadon();
           
            // Getallchitiethoadon();
        }, [])
  
  const Hovernut = ()=>{
    setisToggledd(true);
  }
  const TatHovernut = ()=>{
    setisToggledd(false);
  }



  const [Mangdoanhthu, setMangdoanhthu]= useState([]);
  const [MangSum, setMangSum]= useState([]);
  let SLCHINHANH = localStorage.getItem('SLCHINHANH');
  console.log('trang doan thu hin sl chi nhan', SLCHINHANH);


  // const Getallhoadon = async () => {

  //     const url = `http://localhost:5001/HoaDon`
  //     axios.get(url)
  //               .then(response => {
  //                   const result = response.data;
  //                   const { status, message, data } = result;
  //                   if (status !== 'SUCCESS') {
  //                       alert(message, status)
  //                   }
  //                   else {
  //                     setManghoadon(data)
  
                      
  //                       console.log("ben trang doanthu", data)
  //                   }
  //               })
  //               .catch(err => {
  //                   console.log(err)
  //               })

               
  //             }
 let j=[1,2,3];
 console.log("trang doan thu nhat", j.length)
  let soluonghoadonn=0;
  let Tongthunhap=0;
  let Tongtongdoanhthu=0;
  const [money,setmoney] = useState("");
  
  console.log("trang doan thu nhat 1", Manghoadon.length)
  const Hamhienthidoanthu= ()=>{
      console.log("da chay len dc");

      // let itemm={
      //     _id: Data[i]._id,
      //     ChiNhanh: Data[i].ChiNhanh,
      //         SoLuongHD: soluonghoadon,

      // }
      
      for(let i=1; i<= SLCHINHANH; i++){
          soluonghoadonn=0;
 Tongthunhap=0;
         
          for(let j=0; j< Manghoadon.length ; j ++){
              console.log("vong for in chinhanh doanhthu", Manghoadon[j].ChiNhanh);
              if(Manghoadon[j].ChiNhanh==i){
                  soluonghoadonn=soluonghoadonn+1;
                  Tongthunhap = Tongthunhap + Manghoadon[j].Gia;
                  Tongtongdoanhthu= Tongtongdoanhthu+Manghoadon[j].Gia;

              }
          }

    //       let itemm={
    //       // _id: Data[i]._id,
    //       ChiNhanh: Data[i].ChiNhanh,
    //           SoLuongHD: soluonghoadon,

    //   }

              console.log("chinhanh doanhthu", Manghoadon);
              console.log("tongthunhan", soluonghoadonn);
              console.log("tongthunhan", Tongthunhap);
              console.log("tongdoanhthu12346", Tongtongdoanhthu);
              
              
              
              let itemm={
                _id: i,
                ChiNhanh: i,
                    SoLuongHD: soluonghoadonn,
                    Tongthunhap: Tongthunhap
      
            }
            let khanh={
                Tongdoanhthu: Tongtongdoanhthu
            }
         
            Mangdoanhthu.push(itemm);
            MangSum.push(khanh);
            setmoney(Tongtongdoanhthu)



      }
     

  }
  const handlePostShoww=() => {
       Getallhoadon();
      Hamhienthidoanthu();
  }




  
// console.log("test magn donathu ", Tongtongdoanhthu)

  
  
  return (
    <div>
      
      {/* <Button size='sm' variant='primary' onClick={() => { handlePostShoww() }}>View</Button>| */}

      <>
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col' style={{position:"relative" , top:"30px",color:"red"}}><h5><b><i>Tổng Doanh Thu:{money} VND</i></b></h5></div>
      </div>
    </div>
    <div className={styles.DoanhThuHoaDon}>
    <div className='row'>
                <div className='table-responsive' >
                    <div style={{cursor: "pointer"}} onClick={() => { handlePostShoww() }} >
                <h5 style={{color:"#ff2424"}}    ><b><i   >Bảng Doanh Thu:</i></b></h5></div>
                    <table className='table table-striped table-hover table-bordered' style={{border:"solid 1px"}}>                      
                        <thead >
                            <tr style={{backgroundColor:"#ffff94"}}>
                                <th>Chi Nhánh</th>
                                <th>Tổng SL Hoá Đơn</th>
                                <th>Tổng Thu Nhập</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {Mangdoanhthu.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.ChiNhanh}</td>
                                    <td>{item.SoLuongHD}</td>
                                    <td>{item.Tongthunhap}</td>
                                   
                                  
                                   
                                </tr>
                            )}
                        </tbody>
                    </table>



                    
                </div>
            </div>
        </div>              
    </>
      
      {/* <a>Code Chuc nang</a> */}
    </div>
  );
}

export default DoanhThu;
