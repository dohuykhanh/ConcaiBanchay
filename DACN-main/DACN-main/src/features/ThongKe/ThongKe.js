import React, { useEffect, useState } from "react";
import styles from "./ThongKe.module.css";
// import { useNavigate } from "react-router-dom";
import BanChay from "./BanChay";
import DoanhThu from "./DoanhThu";
import LichSuDieuChuyen from "./LichSuDieuChuyen";
const ThongKe=() => {
  const [navbarThongKe, setNavbarThongKe] = useState("DoanhThu");

  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <div className={styles.DoanhThuThongKe}>
          <div className={styles.DoanhThuThongKeLuuVet}>
            <p className={navbarThongKe === "DoanhThu" ? styles.active_Menu : ""}
              onClick={() => 
                // {navigate(`/DoanhThu`)}
                setNavbarThongKe("DoanhThu")
              }
            >
              Doanh Thu
            </p>
            <p className={navbarThongKe === "LichSuDieuChuyen" ? styles.active_Menu : ""}
              onClick={() =>
                // {navigate(`/LichSuDieuChuyen`)}
                setNavbarThongKe("LichSuDieuChuyen")
              }
            >
              Lịch Sử Điều Chuyển
            </p>
            <p className={navbarThongKe === "BanChay" ? styles.active_Menu : ""}
              onClick={() =>
                // {navigate(`/BanChay`)}
                setNavbarThongKe("BanChay")
              }
            >
              {" "}
              Bán Chạy
            </p>
          </div>
        </div>
      </div>

      {navbarThongKe === "DoanhThu" && <DoanhThu />}

      {navbarThongKe === "LichSuDieuChuyen" && <LichSuDieuChuyen/>}

      {navbarThongKe === "BanChay" &&  <BanChay/>}
    </React.Fragment>
  );
}

export default ThongKe;
