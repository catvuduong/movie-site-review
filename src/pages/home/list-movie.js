import React, { Component } from 'react';
import Movie from './../../components/movie';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';

class ListMovie extends Component {
    componentDidMount() {
        this.props.getListMovie();
    }

    renderHTML = () => {
        let { listMovie } = this.props;
        // console.log(listMovie);
        return listMovie.map((item, index) => {
            return <Movie key={index} movie={item}></Movie>
        });
    }
    render() {
        return (
            <div className="row">
                {this.renderHTML()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listMovie: state.movieReducer.listMovie
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListMovie: () => {
            dispatch(action.actGetListMovieAPI());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
