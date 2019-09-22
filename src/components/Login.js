let React = require('react');
var style1 = { color: '#f1f1f1' }
var avatar = require('../images/img_avatar2.png');
let imgStyle = {height: '100px', width: '100px'};

function Login() {
    return (
        <div>

            <form className="form1">
                <div className="imgcontainer1">
                    <img src={avatar} alt="Avatar" className="avatar" style={imgStyle}/>
                </div>

                <div className="container1">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                            <button type="submit">Login</button>
                            <label>
                                <input type="checkbox" checked="checked" name="remember" /> Remember me
                            </label>
                </div>

                <div className="container1" style={style1}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>

        </div>
    )
}

module.exports = Login;
