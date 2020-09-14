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
            
                {guildData.slice(0,9).map((d)=>
                <tr>
                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                    <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 9 &&
            <Table>
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(10,19).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            
            {guildData.length > 19 &&
            <Table>
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(20,29).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 29 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(30,39).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 39 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(40,49).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 49 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(50,59).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 59 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(60,69).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 69 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(70,79).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 79 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(80,89).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 89 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(90,99).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 99 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(100,109).map((d)=>
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