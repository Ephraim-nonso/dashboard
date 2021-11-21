import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPen,
  faStop,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const Table = () => {
  const tasks = [
    {
      sn: "1",
      product: "SKU-B37572",
      size: "3.3.5.4",
      profile: "NAT1",
      proxy: "ProxyTest/192.128.1.1",
      status: "Failed (Fail Reason)",
    },
    {
      sn: "2",
      product: "SKU-B37572",
      size: "3.3.5.4",
      profile: "NAT1",
      proxy: "ProxyTest/192.128.1.1",
      status: "Check out",
    },
    {
      sn: "3",
      product: "SKU-B37572",
      size: "3.3.5.4",
      profile: "NAT1",
      proxy: "ProxyTest/192.128.1.1",
      status: "Pending...",
    },
    {
      sn: "4",
      product: "SKU-B37572",
      size: "3.3.5.4",
      profile: "NAT1",
      proxy: "ProxyTest/192.128.1.1",
      status: "Check out",
    },
    {
      sn: "5",
      product: "SKU-B37572",
      size: "3.3.5.4",
      profile: "NAT1",
      proxy: "ProxyTest/192.128.1.1",
      status: "Check out",
    },
    {
      sn: "6",
      product: "SKU-B37572",
      size: "3.3.5.4",
      profile: "NAT1",
      proxy: "ProxyTest/192.128.1.1",
      status: "Failed (Fail Reason)",
    },
    {
      sn: "7",
      product: "SKU-B37572",
      size: "3.3.5.4",
      profile: "NAT1",
      proxy: "ProxyTest/192.128.1.1",
      status: "Check out",
    },
    {
      sn: "8",
      product: "SKU-B37572",
      size: "3.3.5.4",
      profile: "NAT1",
      proxy: "ProxyTest/192.128.1.1",
      status: "Check out",
    },
    {
      sn: "9",
      product: "SKU-B37572",
      size: "3.3.5.4",
      profile: "NAT1",
      proxy: "ProxyTest/192.128.1.1",
      status: "Check out",
    },
  ];

  return (
    <div className="table-content">
      {/* <div className="task-wrap">
        <div className="flex title">
          <div>Task</div>
          <div>#</div>
          <div>Product</div>
          <div>Size</div>
          <div>Profile</div>
          <div>Proxy</div>
          <div>Status</div>
          <div>Actions</div>
        </div> */}

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>#</th>
            <th>Product</th>
            <th>Size</th>
            <th>Profile</th>
            <th>Proxy</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.sn}>
              <td>
                <input type="checkbox" name="check" />
              </td>
              <td>{task.sn}</td>
              <td>{task.product}</td>
              <td>{task.size}</td>
              <td>{task.profile}</td>
              <td>{task.proxy}</td>
              <td>{task.status}</td>
              <td className="actions">
                <FontAwesomeIcon icon={faPause} className="action-icon" />
                <FontAwesomeIcon icon={faStop} className="action-icon" />
                <FontAwesomeIcon icon={faPen} className="action-icon pen" />
                <FontAwesomeIcon icon={faTrashAlt} className="action-sicon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {tasks.map((task) => (
        <div key={task.sn} className="flex">
          <div>
            <input type="checkbox" name="check" />
          </div>
          <div>{task.sn}</div>
          <div>{task.product}</div>
          <div>{task.size}</div>
          <div>{task.profile}</div>
          <div>{task.proxy}</div>
          <div>{task.status}</div>
          <div className="actions">
            <FontAwesomeIcon icon={faPause} />
            <FontAwesomeIcon icon={faStop} />
            <FontAwesomeIcon icon={faPen} />
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
      ))} */}
      {/* </div> */}
    </div>
  );
};

export default Table;
