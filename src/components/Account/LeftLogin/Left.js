import React, { Component } from 'react';

const ContentLeft = () =>{
    return (
        <div className="contentLeft">
            <div className="inline" >
                <p><i class="fas fa-search"></i> <span >Follow your interests</span>.</p>
                <p><i class="fas fa-users"></i> <span>Hear what people are talking about</span>.</p>
                <p><i class="far fa-comment"></i> <span>Join the conversation</span>.</p>
            </div>
        </div>
    )
}

const LeftLogin = () =>{
    return (
        <div className="leftBar">
            <ContentLeft />
        </div>
    )
}

export default LeftLogin;