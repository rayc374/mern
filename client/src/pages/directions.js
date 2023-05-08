import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

function Directions() {
  return (
    <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th style={{ fontSize: "2rem" }} colSpan={5}>
            宜蘭市立圖書館場地使用說明
          </th>
        </tr>
        <tr style={{ backgroundColor: "#CCCCFF", fontSize: "1.5rem" }}>
          <th scope="col">收費項目</th>
          <th scope="col">區分</th>
          <th scope="col">使用費</th>
          <th scope="col">保證金</th>
          <th scope="col">設備</th>
          <th scope="col">說明</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope="row" rowSpan={3}>
            市民講堂（3F）
          </th>
          <td>上午場次</td>
          <td rowSpan={3}>4,000</td>
          <td rowSpan={3}>4,000</td>
          <td rowSpan={3}>✔投影機✔音響✔布幕 ✔空調✔麥克風</td>
        </tr>

        <tr>
          <td>下午場次</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td scope="row">預排演(每場次)</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row" rowSpan={3}>
            城東藝廊（3F）
          </th>
          <td>上午場次</td>
          <td rowSpan={3}>3,000</td>
          <td rowSpan={3}>4,000</td>
          <td rowSpan={3}>✔投影機✔音響✔空調✔麥克風</td>
        </tr>
        <tr>
          <td scope="row">下午場次</td>
          <td></td>
        </tr>
        <tr>
          <td scope="row">預排演（每場次）</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row" rowSpan={2}>
            親子閱讀區（2F）
          </th>
          <td>上午場次</td>
          <td rowSpan={2}>1,000</td>
          <td rowSpan={2}>1,000</td>
          <td rowSpan={2}>✔投影機✔音響✔空調✔麥克風✔wifi</td>
        </tr>
        <tr>
          <td scope="row">下午場次</td>
        </tr>
        <tr>
          <th scope="row" rowSpan={2}>
            樂學教室（1F）
          </th>
          <td>上午場次</td>
          <td rowSpan={2}>2,000</td>
          <td rowSpan={2}>2,000</td>
          <td rowSpan={2}>✔投影機✔音響✔空調✔麥克風✔wifi✔白板</td>
        </tr>
        <tr>
          <td scope="row">下午場次</td>
        </tr>
        <tr>
          <th scope="row" rowSpan={2}>
            梯廳（1F）
          </th>
          <td>上午場次</td>
          <td rowSpan={2}>3,000</td>
          <td rowSpan={2}>3,000</td>
          <td rowSpan={2}>✔投影機✔音響✔空調✔麥克風</td>
        </tr>
        <tr>
          <td scope="row">下午場次</td>
        </tr>
        <tr>
          <th scope="row" rowSpan={3}>
            戶外廣場
          </th>
          <td>上午場次</td>
          <td rowSpan={3}>500</td>
          <td rowSpan={3}>1,000</td>
          <td rowSpan={3}>-</td>
        </tr>
        <tr>
          <td scope="row">下午場次</td>
        </tr>
        <tr>
          <td>晚間場次</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default Directions;
