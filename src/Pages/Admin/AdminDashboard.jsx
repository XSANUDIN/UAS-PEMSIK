import { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import PostForm from "../Post/Post";
import Modal from "./Modal";
import Table from "./Table";



function AdminDashboard() {
  return(
    <>
      <div className="flex">
      <Sidebar/>
      <Table/>
      </div>
    </>
  );
}

export default AdminDashboard;
