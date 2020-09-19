import React, {useEffect,useState,} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.table`
    border:3px solid white;
    border-radius:10px;
    margin-top:2em;
    width:90vw;
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
    background-color: rgba(100,100,100,0.6);;
`
const TdataG = styled.td`
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
            {guildData.length >= 10 &&
            <Table>
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(10,20).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            
            {guildData.length > 20 &&
            <Table>
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(20,30).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 30 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(30,40).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 40 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(40,50).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 50 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(50,60).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 60 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(60,70).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 70 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(70,80).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 80 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(80,90).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 90 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(90,100).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 100 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(100,110).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
{/* /////////////////////////////////////////////////////////////////////////////////////// */}
            {guildData.length > 110 &&
            <Table>
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(110,120).map((d)=>
                <tr>
                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                    <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 120 &&
            <Table>
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(120,130).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            
            {guildData.length > 130 &&
            <Table>
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(130,140).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 140 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(140,150).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 150 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(150,160).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 160 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(160,170).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 170 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(170,180).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 180 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(180,190).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 190 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(190,200).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 200 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(200,210).map((d)=>
                <tr>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </tr>)}

            </Table>}
            {guildData.length > 210 &&
            <Table >
                <tr>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </tr>
            
                {guildData.slice(210,220).map((d)=>
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