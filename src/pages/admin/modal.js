import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../redux/actions/index';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: "",
                username: "",
                password: "",
                email: "",
                fullname: "",
                role: "",
                phone: "",
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        if (nextProps && nextProps.userEdit) {
            this.setState({
                user: {
                    id: nextProps.userEdit.id,
                    password: "",
                    username: nextProps.userEdit.username,
                    email: nextProps.userEdit.email,
                    fullname: nextProps.userEdit.fullname,
                    role: nextProps.userEdit.role,
                    phone: nextProps.userEdit.phone,
                }
            });
        }
        else {
            this.setState({
                user: {
                    id: "",
                    username: "",
                    password: "",
                    email: "",
                    fullname: "",
                    role: "",
                    phone: "",
                }
            })
        }
    }


    handleOnChange = event => {
        let { name, value } = event.target;
        this.setState({
            user: {
                ...this.state.user, [name]: value
            }
        },
            // () => {
            //     console.log(this.state.user);
            // }
        );
    }
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state.user);
        this.props.updateUser(this.state.user);
    }
    render() {
        return (
            <div
                className="modal fade"
                id="modelIdUser"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit User</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" onChange={this.handleOnChange} name="username" value={this.state.user.username} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" className="form-control" onChange={this.handleOnChange} name="password" value={this.state.user.password} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" onChange={this.handleOnChange} name="email" value={this.state.user.email} />
                                </div>
                                <div className="form-group">
                                    <label>Fullname</label>
                                    <input type="text" className="form-control" onChange={this.handleOnChange} name="fullname" value={this.state.user.fullname} />
                                </div>
                                <div className="form-group">
                                    <label>Role  </label>
                                    <select className="form-control" onChange={this.handleOnChange} name="role" value={this.state.user.role}  >
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" onChange={this.handleOnChange} name="phone" value={this.state.user.phone} />
                                </div>

                                <button type="submit" className="btn btn-success">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user => {
            dispatch(action.actUpdateUser(user));
        }
    }
}


export default connect(null, mapDispatchToProps)(Modal);