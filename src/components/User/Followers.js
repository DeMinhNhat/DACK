import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import '../../utils/following.css'

const ProfileCard = (props)=>{
    return (
        <div class="card">
            <img src={props.data.img} alt="John" />
                <h1>{props.data.name}</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>{props.data.university}</p>
                <div className="icon">
                    <a href="#"><i class="fa fa-dribbble"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                </div>
                <p><button>Followers</button></p>
        </div>

    );
}
        
export default class Followers extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const element =  people.map((val,index) => <Grid item xs={12} sm={4} key={index}> <ProfileCard data={val}/> </Grid>);
        console.log(element);
        return(
            <Grid container spacing={5}>
                {element}
            </Grid>
        )
    }
}

// hardcode to test :V
const people = [
    {
        img:'http://img.bongdanet.vn/application/admin/image/18.12.2017/Kaka_-_giai_nghe.jpg',
        name:'Kaka',
        university:'KHTN'
    },
    {
        img:'http://img.bongdanet.vn/application/admin/image/18.12.2017/Kaka_-_giai_nghe.jpg',
        name:'Messi',
        university:'BK'
    },
    {
        img:'http://img.bongdanet.vn/application/admin/image/18.12.2017/Kaka_-_giai_nghe.jpg',
        name:'CR7',
        university:'KHTN'
    }
];