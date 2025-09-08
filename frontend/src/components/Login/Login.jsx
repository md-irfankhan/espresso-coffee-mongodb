

const Login = () => {
    return (
        <div>
            <form className="flex justify-center py-24">
                <fieldset className="fieldset bg-[#F4F3F0] border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend font-rancho">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <input className="input text-center  w-full bg-[#E3B577]  text-[18px] font-rancho mt-4" value={'Login'}></input>
                </fieldset>
            </form>

        </div>
    );
};

export default Login;