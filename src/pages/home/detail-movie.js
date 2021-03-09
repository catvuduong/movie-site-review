import React, { Component } from 'react';
import * as action from './../../redux/actions';
import { connect } from 'react-redux';

class DetailMovie extends Component {
    componentDidMount() {
        // console.log(this.props);
        const id = this.props.match.params.id
        this.props.getDetailMovie(id);
    }

    render() {
        let { movie } = this.props
        // console.log(movie);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <img className="img-fluid" src={movie.thumbnail} alt="" />
                    </div>
                    <div className="col-sm-8">
                        <table className="table text-center">
                            <tbody>
                                <tr>
                                    <td className="detail-movie-td">Tên phim</td>
                                    <td>{movie.name}</td>
                                </tr>
                                <tr>
                                    <td>Mô tả</td>
                                    <td>{movie.description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-sm-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Cum rap</th>
                                    <th>Ten rap</th>
                                    <th>Ngay chieu</th>
                                    <th>Gio chieu</th>
                                </tr>
                            </thead>
                            <tbody>{this.renderTable()}</tbody>
                        </table>
                    </div>
                </div> */}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDetailMovie: id => {
            dispatch(action.actGetDetailMovieAPI(id))
        }
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movieReducer.movie
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
