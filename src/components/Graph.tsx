import {  datum } from "../type"
// the component uses victory to render the graph elements. Link: https://formidable.com/open-source/victory/
import { VictoryLine, VictoryChart, VictoryVoronoiContainer, VictoryTheme, VictoryTooltip, VictoryGroup, VictoryScatter } from 'victory';
import React, { useEffect, useRef } from "react";
import { useContainerDimensions, refElement} from '../hooks/useContainerDimensions'

// Component for displaying graph
const Graph = (props: {data?: datum[]}) => {

    const myRef = useRef<HTMLDivElement>(null)
    const { width, height } = useContainerDimensions(myRef as unknown as refElement)
    //const [currentDsplay, setCurrentDsplay] = useState('all')
    // updating the graph when new data is provided or data is changed
    
    useEffect(()=>{
        console.log(props.data)
    }, [props.data, myRef])
    
    const style: React.CSSProperties = {
        maxWidth: '800px', 
        margin: 'auto', 
        width: '80%', 
        minWidth: '320px', 
        fontFamily: 'Courier', 
        height: props.data === undefined ? '2rem' : '30rem',
        overflowX: 'scroll'
    }

    // a small function to optimize the displays of dates on the graph
    const renderedDate = (index: number, d: Date, length?: number) => {
        const day = d.toString().split('-')[2]
        const month = d.toString().split('-')[1]
        const year = d.toString().split('-')[0]
        if(index === 0) return day+'-'+month+'\n'+year
        if(length && index=== length-1) return day+'-'+month+'\n'+year
        return day
    }
    // if no data is provided, the graph component renders out a notification instead of an empty graph
    // also a layer of protection for typescript typechecking
    if(props.data === undefined) return (<div style= {style}>No data</div>)

    return (
        <div style={style}>
            <div ref={myRef} style={{height: '28rem', width: '800px'}}>
                <VictoryChart 
                    domainPadding={0} 
                    theme={VictoryTheme.material} 
                    width={width} height={height*0.9} 
                    maxDomain={{ y: 18 }}
                    containerComponent={<VictoryVoronoiContainer/>}
                >
                    <VictoryGroup
                        data={props.data?.map((e, index) => {
                            const dataSet = {y: e.conversation_count, x: renderedDate(index, e.date, props.data?.length)}
                            return dataSet
                        })}
                        color = 'black'
                        animate={{
                            duration: 500,
                            onLoad: { duration: 500 }
                        }}
                        labels={({ datum }) => `Conversation Count:\n${datum.x}: ${datum.y}`}
                        labelComponent={
                            <VictoryTooltip
                                style={{ fontSize: 10 }}
                            />
                        }
                    >
                        <VictoryLine
                            style={{
                                data: {
                                strokeWidth: ({ active }) => active ? 2 : 1
                                },
                                labels: { fill: "black" }
                            }}
                            interpolation="linear"
                        />
                        <VictoryScatter size={({ active }) => active ? 3 : 1}/>
                    </VictoryGroup>
                    <VictoryGroup
                        data={props.data?.map((e, index) => {
                            const dataSet = {y: e.missed_chat_count, x: renderedDate(index, e.date, props.data?.length, )}
                            return dataSet
                        })}
                        color = 'Orange'
                        animate={{
                            duration: 500,
                            onLoad: { duration: 500 }
                        }}
                        labels={({ datum }) => `Missed Chat Count:\n${datum.x}: ${datum.y}`}
                        labelComponent={
                            <VictoryTooltip
                                style={{ fontSize: 10 }}
                            />
                        }
                    >
                        <VictoryLine
                            style={{
                                data: {
                                strokeWidth: ({ active }) => active ? 2 : 1
                                },
                                labels: { fill: "Orange" }
                            }}
                        />
                        <VictoryScatter size={({ active }) => active ? 3 : 1}/>
                    </VictoryGroup>
                    <VictoryGroup
                        data={props.data?.map((e, index) => {
                            const dataSet = {y: e.visitors_with_conversation_count, x: renderedDate( index, e.date, props.data?.length)}
                            return dataSet
                        })}
                        color = 'CadetBlue'
                        animate={{
                            duration: 500,
                            onLoad: { duration: 500 }
                        }}
                        labels={({ datum }) => `Visitors With Conversation Count:\n${datum.x}: ${datum.y}`}
                        labelComponent={
                            <VictoryTooltip
                                style={{ fontSize: 10 }}
                            />
                        }
                        
                    >
                        <VictoryLine
                            style={{
                                data: {
                                strokeWidth: ({ active }) => active ? 2 : 1
                                },
                                labels: { fill: "CadetBlue" }
                            }}
                            interpolation="linear"
                        />
                        <VictoryScatter size={({ active }) => active ? 3 : 1}/>
                    </VictoryGroup>
                </VictoryChart>
            </div>
            
        </div>
    )
}

export default Graph