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
const DocTitleContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`
const DocInfo = styled.p`
    text-align:center;
    border: 1px solid white;
    padding: 5px;
    background-color: rgba(0,0,0,0.8);;
    color:white;
    font-weight: bold;
`
const DocInfoUTC = styled.p`
    text-align:center;
    border: 1px solid white;
    padding: 5px;
    background-color: rgba(0,0,0,0.8);;
    color:white;
    font-weight: bold;
    font-size:1.5em;
`
const CardContainer = styled.div`
    border:3px solid white;
    border-radius:10px;
    margin-top:2em;
    width:75vw;
    margin-left:auto;
    margin-right:auto;    
    background-color:rgba(0,0,0,0.3);
    box-shadow: 0px 0px 5px 5px black
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
                        {d.GuildInfo.length > 0 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(0,9).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 9 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(10,19).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 19 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(20,29).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 29 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(30,39).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 39 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(40,49).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 49 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(50,59).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 59 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(60,69).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 69 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(70,79).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 79 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(80,89).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 89 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(90,99).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                        {d.GuildInfo.length > 99 &&
                            <Table>
                                <tr>
                                    <Thead>Guild</Thead>
                                    <Thead>Players</Thead>
                                </tr>
                            
                                {d.GuildInfo.slice(100,109).map((d)=>
                                <tr>
                                    <Tdata key={d.Guild}> <Text>{d.Guild}</Text> </Tdata> 
                                    <Tdata key={d.Ammount}> <Text>{d.Ammount}</Text> </Tdata>
                                </tr>)}
                            </Table>
                        }
                    </TableContainer>
                    <DocInfo>Total Players: {d.Total}</DocInfo>
                </CardContainer>
                )}

            
            
            </div> 
        }
        
    </>
  );
}

export default RecentZvz;
