import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://foms.biz.id/api/login", form, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.code === 200) {
        const { user, token } = response.data.data;
        dispatch(login({ user, token }));

        Swal.fire({
          icon: "success",
          title: "Login Sukses",
          text: "Selamat datang!",
        });

        console.log("API Response:", response.data);

        navigate("/admin");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: error.response?.data?.message || "Terjadi kesalahan",
      });
    }
  };

  return (
    <div className="flex flex-1 h-screen bg-white">
      <div className="flex-1 mt-[210px] justify-center items-center">
        <div className="text-center text-2xl font-bold p-4">Halaman Login</div>
        <div className="flex justify-center">
          <div className="w-1/4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  minLength="8"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-400"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
