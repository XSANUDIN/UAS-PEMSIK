import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Register = () =>{
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await axios.post('https://foms.biz.id/api/register',
                                form, {headers: {"Content-Type" : "application/json"}});

            if(response.data.code === 201){
                Swal.fire({
                    icon:'success',
                    title:'Sukses Bang',
                    text: response.data.message
                })
                console.log("Sukses")

                setForm({name: '', email: '', password: ''})
                
                navigate('/login')
            }
        }

        catch(e){
            Swal.fire({
                icon:'error',
                title:'Gwagal Bang',
                text: e.response?.data?.message
            })
            console.log("Guwagal", e.response?.data?.message)
        }
    }


    return(
        <>
        <div className="flex flex-1 h-screen bg-white">
            <div className="flex-1 mt-[210px]">
                <div className="text-center text-2xl font-bold p-4">Halaman Registrasi</div>
                <div className="flex justify-center">
                    <div className="w-1/4">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-4">
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg"
                            name="name"
                            value={form.nama}
                            onChange={handleChange}
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700">Password:</label>
                        <input
                            minLength="8"
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />
                        </div>
                        <div className="flex justify-center">
                        <button className="bg-blue-600 text-white px-5 py-2 mr-2 rounded-md hover:bg-blue-400">
                            Registrasi
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;