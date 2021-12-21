import React, { Component, useEffect, useState } from 'react';



export class HookC extends Component{

    state = {
        names : "amr",
        id : 25
    }
    
    componentDidMount(){
        console.log('class componentDidMount')
    }


    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    // handelClick = () =>{
        
    // } 

    render(){

        return(
            <div>
                    <h1>HookC</h1>
            </div>
        )
    }
}


export const HookF = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    function handClick (e){
        setEmail(
            e.target.value
        );
         
    }

    // useEffect(() => {
    //     console.log('function componentDidMount')
    // },[])

    // useEffect(() => {
    //     console.log('function componentDidUpdate')
    // },)

    // useEffect(() => {
    //     console.log('function componentDidWillUnmount')
    // },)


    return(
        <div>
            <input type="text"  onChange={handClick} />
               <p>{email}</p>
            <input type="password"  />
            <button>Click</button>
        </div>
    )
}