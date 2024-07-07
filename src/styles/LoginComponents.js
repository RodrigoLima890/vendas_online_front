import styled from 'styled-components';

export const LoginTitle = styled.h3`
    color: #5159DB;
    font-weight:bold;
    text-align:center;
    font-size:1.6em;
`;

export const ContainerBody = styled.div`
    height:100vh;
    width:100vw;
    background-color: #50515C;
    display:flex;
    align-items:center;
`

export const ContainerLogin = styled.div`
    background-color: #ffffff;
    width: 30%;
    height: 80vh;
    padding:20px;
    margin: 0 auto;
    display:flex;
    flex-direction:column;

`

export const Input = styled.input`
    background-color:#D9D9D9;
    border:none;
    outline:none;
    border-radius:10px;
    width:90%;
    height:40px;
    padding:4px;
    margin-bottom:10px;
    padding-left:20px;
    font-size:1em;
`

export const Label = styled.label`
    font-size:1.1em;
    font-weight:bold;
    padding:3px;
    margin-bottom:5px;

`

export const Button = styled.button`
    width: 120px;
    padding:15px;
    height:45px;
    background-color:#5159DB;
    color:#ffffff;
    border:none;
    margin:12px auto;
    font-size:1em;
    font-weight:bold;
    cursor: pointer;
    border-radius:5px;
    &:hover {
        background-color: #4149CB;
    }
`