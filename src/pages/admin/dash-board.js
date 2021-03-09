import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import * as action from './../../redux/actions/index';
import Modal from './modal';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEdit: null,
        }
    }

    componentDidMount() {
        this.props.getListUsers();
    }
    renderHTML() {
        let { listUsers } = this.props;
        return listUsers.map((user, index) => {
            return (
                <Fragment key={index}>
                    <tr>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-success"
                                data-toggle="modal"
                                data-target="#modelIdUser"
                                onClick={() => {
                                    this.setState({
                                        userEdit: user
                                    })
                                }}
                            >Edit</button>
                        </td>
                    </tr>
                </Fragment>
            );
        })
    }
    render() {
        let { userEdit } = this.state;
        return (
            <div className="container">
                <h3 className="text-center">List of Users</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Username</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderHTML()}
                    </tbody>
                </table>
                <Modal userEdit={userEdit}></Modal>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListUsers: () => {
            dispatch(action.actGetListUsersAPI());
        }
    }
}
const mapStateToProps = state => {
    return {
        listUsers: state.userReducer.listUsers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
