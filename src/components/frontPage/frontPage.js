import React, {useEffect,useState,} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MainContainer = styled.div`
    width:min-content;
    margin-left:auto;
    margin-right:auto;
`

const Table = styled.table`
    border:3px solid #DCDCDC;
    border-radius:10px;
    background-color:rgba(0,0,0,0.3);  
    margin-top:2em;
    display: grid;
    grid-template-columns: repeat( 5,1fr );
    padding: 10px;
    box-shadow: 0px 0px 25px 15px black;
`

const Tbody = styled.tbody`
    background-color:rgba(0,0,0,0.3);  
    border-collapse: separate;  
    color:#DCDCDC;  
    margin:.5px;
`
const Thead = styled.th`
    font-family: Arial Black,Arial Bold,Gadget,sans-serif; 
    text-align:center;
    min-width: 5em;
    border: 2px solid #DCDCDC;
    background-color:rgba(0,0,0,0.8);
`

const Tdata = styled.td`
    text-align:center;
    border: 1px solid #DCDCDC;
    padding: 5px;
    background-color: rgba(100,100,100,0.3);
`
const TdataG = styled.td`
    text-align:center;
    border: 1px solid #DCDCDC;
    padding: 5px;
    background-color: rgba(0,0,0,0.8);;
`

const Text = styled.span`
    font-family: Arial Black,sans-serif; 
`
const Title = styled.p`
margin-top:0;
margin-bottom:0;
font-family: 'Skranji', cursive;
font-size:2em;  
text-align:center;
color:#DCDCDC; 
}
`

const TableRow =styled.tr`
    &:first-child(even) {background: black}
    &:nth-child(2n+3) {background: rgba(100,100,100,0.6)}
    &:nth-child(2n+3) {color:black}
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
    <MainContainer>

    {guildData.length > 0 &&
        <Table>            
            <Tbody>
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(0,10).map((d)=>
                <TableRow>
                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                    <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>
            {guildData.length >= 10 &&
            <Tbody>
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(10,20).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            
            {guildData.length > 20 &&
            <Tbody>
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(20,30).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            {guildData.length > 30 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(30,40).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            {guildData.length > 40 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(40,50).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
        </Table>}
        {guildData.length > 50 &&
        <Table>
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(50,60).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>
            {guildData.length > 60 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(60,70).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            {guildData.length > 70 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(70,80).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            {guildData.length > 80 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(80,90).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            {guildData.length > 90 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(90,100).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
        </Table>}
        {guildData.length > 100 &&           
        <Table>
            
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(100,110).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>

            {guildData.length > 110 &&
            <Tbody>
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(110,120).map((d)=>
                <TableRow>
                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                    <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            {guildData.length > 120 &&
            <Tbody>
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(120,130).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            
            {guildData.length > 130 &&
            <Tbody>
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(130,140).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            {guildData.length > 140 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(140,150).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
        </Table>}
        {guildData.length > 150 &&
        <Table>
            
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(150,160).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>
            {guildData.length > 160 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(160,170).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            {guildData.length > 170 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(170,180).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            {guildData.length > 180 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(180,190).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            {guildData.length > 190 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(190,200).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
        </Table>}
        {guildData.length > 200 &&
        <Table>
            
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(200,210).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>
            {guildData.length > 210 &&
            <Tbody >
                <TableRow>
                    <Thead>Guild</Thead>
                    <Thead>%</Thead>
                </TableRow>
            
                {guildData.slice(210,220).map((d)=>
                <TableRow>
                <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                <Tdata key={d.Ammount}> <Text>{d.Percent}%</Text> </Tdata>
                </TableRow>)}

            </Tbody>}
            </Table>}     
    </MainContainer>
</>
    );
}

export default FrontPage;