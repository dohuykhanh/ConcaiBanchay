import React, { useState, useEffect,useRef } from "react";
// import  "./cartcss.css" 
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import "../Viewxemhoadon.css"



const ChiTietSanPham = ({ ThongKeDoanhThu,closemodal,Data3}) => {
   
  return (
   
<div className="modalBackground">
    <div className="modalContainer">
       
{/* <Button size='sm' variant='primary' onClick={handleclick}>Xem</Button>| */}
<div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Vật Tư</th>
                                <th>Giá</th>
                               
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {Data3.map((it) => 
                            <tr key={it._id}>
                            <td>{it.TenVatTu}</td>
                             <td>{it.SoLuong}</td>
                           
                             <td>{it.Gia}</td>
                            
                            
                         </tr>
                         
                            )
                            
                            }


                           
                        </tbody>
                        {/* <tbody>
                            {Data.map((item) => 
                            <tr key={item._id}>
                            <td></td>
                             <td></td>
                           
                             <td></td>
                             <td>
                             <Button size='sm' variant='primary'onClick={() => {handleDelete(setId(item._id))}} >Xóa</Button>|
                             <Button size='sm' variant='primary'onClick={handleclickxacthuc} >XAC THUC</Button>|
                             </td>
                            
                            
                         </tr>
                         
                            
                            
                            )}
                           
                        </tbody> */}
                    </table>

                    

                </div>
            </div>
            <div className={"nut"}>
            <button  onClick={() => closemodal(false)}> X </button>
            </div> 
            
            </div>
            
</div>



  );
};

export default ChiTietSanPham;



