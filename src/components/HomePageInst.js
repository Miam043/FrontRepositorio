import React, { Component } from 'react'


export default class HomePageInst extends Component {
    componentDidMount(){
        fetch("http://localhost:4000/api/data/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              token: window.localStorage.getItem("token"),  
            }),
          }).then((res) => res.json())
            .then((data) => {
              console.log(data, "userData");
            });
    }
    render() {
        return (
            <div>HomePageInst</div>
        )
    }
}

