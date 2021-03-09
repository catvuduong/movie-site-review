import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../redux/actions/index';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: "",
                email: "",
                fullname: "",
                phone: ""
            }
        }
    }
    handleOnchange = event => {
        let { name, value } = event.target;
        this.setState({
            user: { ...this.state.user, [name]: value }
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state)
        // props onSubmit need life cycle ???
        // console.log(this.state);
        this.props.register(this.state.user);
    }
    render() {
        return (
            <div className="container">
                <h3 className="title">Register</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Tài khoản</label>
                        <input type="text" className="form-control" name="username" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input type="text" className="form-control" name="password" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <label>Họ tên</label>
                        <input type="text" className="form-control" name="fullname" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="text" className="form-control" name="phone" onChange={this.handleOnchange} />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Đăng nhập
                </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: user => {
            dispatch(action.actRegister(user))
        }
    }
}
export default connect(null, mapDispatchToProps)(Register);
