import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate,Link, Navigate } from "react-router";


const SignUp = () => {
    const {createUser,updateUser,user}=useContext(AuthContext);
    const location=useLocation()
    const navigate=useNavigate()
     if(user){
        return <Navigate to={location.state?location.state:'/'}></Navigate>
    }
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password=form.password.value;
        console.log(name,email);
        
        createUser(email,password).then(res=>{
            console.log(res);
            
            updateUser(name,photo).then(res=>{
                console.log(res);
                navigate(location.state?location.state:'/')
                
            }).catch(err=>{
                console.log(err);
                
            })

        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <form onSubmit={handleRegister} className="flex justify-center py-24">
                <fieldset className="fieldset bg-[#F4F3F0] border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend font-rancho">Sign Up</legend>

                    <label className="label">Name</label>
                    <input name="name" type="text" className="input" placeholder="Name" />
                    <label className="label">Photo</label>
                    <input name="photo" type="text" className="input" placeholder="Photo" />
                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />

                    <label  className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div>
                        <p>Already registered? <Link className="text-orange-400" state={location.state?location.state:'/'} to={'/register'}>Login</Link></p>
                    </div>
                    <input type="submit" className="input text-center  w-full bg-[#E3B577]  text-[18px] font-rancho mt-4" value={'Sign Up'}></input>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUp;