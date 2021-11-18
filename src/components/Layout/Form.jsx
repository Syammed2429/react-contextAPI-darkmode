import './form.css'


const Form = () => {
    return (
        <div className="">
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label htmlFor="username">Enter Your Username :
                    <input type="text" placeholder="Enter Your username" id="username" />
                </label>
                <label htmlFor="password">Enter your password :
                    <input type="password" placeholder="Enter Your Password" id="password" />
                </label>
                <label htmlFor="re-password">Re-Enter your password :

                    <input type="password" placeholder="Re-Enter Your Password" id="re-password" />
                </label>
                <label htmlFor="date">Select Your Birth Date :
                    <input type="date" />
                </label>
                <label htmlFor="gender">
                    Select Your Gender :
                    <select

                        type="select" id="gender" >

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>


                <input
                    className="btn btn-success"
                    type="submit" value="Register" />

            </form>
        </div>
    )
}

export { Form }
