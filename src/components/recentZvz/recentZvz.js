import React, {useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const TableContainer = styled.table`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
    justify-content:space-evenly;
    justify-items:center;

`

const Table = styled.tbody`
    margin-left:auto;
    margin-right:auto;  
    border-collapse: separate;  
    color:#DCDCDC;    
`
const Thead = styled.th`
    text-align:center;
    min-width: 5em;
    border: 2px solid #DCDCDC;
    background-color:rgba(0,0,0,0.8);
`

const Tdata = styled.td`
    text-align:center;
    border: 1px solid #DCDCDC;
    padding: 5px;
    background-color: rgba(100,100,100,0.6);
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
color:#DCDCDC; 

`
const DocTitleContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    
`
const DocInfo = styled.p`
    text-align:center;
    border: 1px solid #DCDCDC;
    padding: 5px;
    background-color: rgba(0,0,0,0.8);;
    color:#DCDCDC;
    font-weight: bold;
    border-radius: 10px;
`
const DocInfoT = styled.p`
    text-align:center;
    border: 1px solid #DCDCDC;
    padding: 5px;
    background-color: rgba(0,0,0,0.8);;
    color:#DCDCDC;
    font-weight: bold;
`
const DocInfoUTC = styled.p`
    text-align:center;
    border: 1px solid #DCDCDC;
    padding: 5px;
    background-color: rgba(0,0,0,0.8);;
    color:#DCDCDC;
    font-weight: bold;
    font-size:1.5em;
    border-radius: 10px;
`
const CardContainer = styled.div`
    border:3px solid #DCDCDC;
    border-radius:10px;
    margin-top:2em;
    width:75vw;
    margin-left:auto;
    margin-right:auto;    
    background-color:rgba(0,0,0,0.3);
    box-shadow: 0px 0px 5px 5px black
`

const TableRow =styled.tr`
    &:first-child(even) {background: black}
    &:nth-child(2n+3) {background: rgba(100,100,100,0.6)}
    &:nth-child(2n+3) {color:black}
`






function RecentZvz() {
    const [zvzDocuments,setZvzDocuments] = useState([])
        useEffect(()=>{
            async function fetchData(){
                const request = await axios.get(process.env.REACT_APP_ALL_DOCUMENTS_URL)
                console.log(request)  
                setZvzDocuments(request.data)
            }
            fetchData()                       
        },[])

        console.log(zvzDocuments)

  return (
    <>
        <Title>Recent ZvZ's</Title>
        
        {zvzDocuments.length > 0 && 
        <div> 
                {zvzDocuments.map((d)=>
                <CardContainer>
                    <DocTitleContainer><DocInfo>Created By: {d.Author}</DocInfo><DocInfoUTC>{d.Timestamp.substring(d.Timestamp.indexOf("_")+1)}</DocInfoUTC><DocInfo>Date Created: {d.Timestamp.split("_",[1])}</DocInfo></DocTitleContainer>
                    <TableContainer>
                        {d.GuildInfo.length >= 0 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(0,10).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 10 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(10,20).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 20 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(20,30).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 30 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(30,40).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 40 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(40,50).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 50 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(50,60).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                        {d.GuildInfo.length >= 60 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(60,70).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                        {d.GuildInfo.length >= 70 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(70,80).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                        {d.GuildInfo.length >= 80 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(80,90).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                        {d.GuildInfo.length >= 90 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(90,100).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                        {d.GuildInfo.length >= 100 &&
                            <Table>
                                <TableRow>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </TableRow>
                            
                                {d.GuildInfo.slice(100,110).map((d)=>
                                <TableRow>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </TableRow>)}
                            </Table>
                        }
                    </TableContainer>
                    <DocInfoT>Total Players: {d.Total}</DocInfoT>
                </CardContainer>
                )}

            
            
            </div> 
        }
        
    </>
  );
}

export default RecentZvz;
