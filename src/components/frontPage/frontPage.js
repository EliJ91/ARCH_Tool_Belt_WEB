import React, {useEffect,useState,} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.table`
    border:3px solid white;
    border-radius:10px;
    margin-top:2em;
    width:75vw;
    margin-left:auto;
    margin-right:auto;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
    justify-content:space-evenly;
    justify-items:center;
    background-color:rgba(0,0,0,0.3);
    box-shadow: 0px 0px 5px 5px black

`

const Table = styled.tbody`
    margin-left:auto;
    margin-right:auto;  
    border-collapse: separate;
    border-spacing: 15px;  
    color:white;    
`
const Thead = styled.th`
    text-align:center;
    min-width: 5em;
    border: 2px solid white;
    background-color:rgba(0,0,0,0.8);
`

const Tdata = styled.td`
    text-align:center;
    border: 1px solid white;
    padding: 5px;
    background-color: rgba(0,0,0,0.8);;
`

const Text = styled.span`
    font-family: 'Skranji', cursive;
`
const Title = styled.p`
margin-top:0;
margin-bottom:0;
font-family: 'Skranji', cursive;
font-size:2em;  
text-align:center;
color:white; 
`







 function FrontPage() {
        const [guildData,setGuildData] = useState({})
        useEffect(()=>{
            async function fetchData(){
                const request = await axios.get(process.env.REACT_APP_AVERAGE_URL)
                console.log(request)  
                setGuildData(request.data)  
                           
            }
            fetchData()                       
        },[])

    return (
        <>
        <Title>ZVZ Participation</Title>
        <Container>
            {guildData.length > 0 &&
            <Table>
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(0,10).map((d)=>
                <tr>
                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                    <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 10 &&
            <Table>
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(11,21).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 21 &&
            <Table>
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(21,31).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 31 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(32,42).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 42 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(43,53).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 53 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(54,65).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 65 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(66,77).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 77 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(77,87).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            
            
            
            
    </Container>
       </> 
    );
}

export default FrontPage;