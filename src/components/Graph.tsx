import { datum } from "../type"
import { VictoryLine, VictoryChart, VictoryVoronoiContainer, VictoryTheme, VictoryTooltip, VictoryGroup, VictoryScatter } from 'victory';
import React, { useEffect, useRef, useState } from "react";
import { useContainerDimensions, refElement} from '../hooks/useContainerDimensions'

const Graph = (props: {data?: datum[]}) => {

    const myRef = useRef<HTMLDivElement>(null)
    const { width, height } = useContainerDimensions(myRef as unknown as refElement)
    const [currentDsplay, setCurrentDsplay] = useState('all')

    useEffect(()=>{
        console.log(props.data)
    }, [props.data, myRef])
    
    const style: React.CSSProperties = {
        maxWidth: '800px', 
        margin: 'auto', 
        width: '80%', 
        minWidth: '320px', 
        fontFamily: 'Courier', 
        height: props.data === undefined ? '2rem' : '28rem'
    }

    if(props.data === undefined) return (<div style= {style}>No data</div>)

    return (
        <div ref={myRef} style={style}>
            <VictoryChart 
                domainPadding={0} theme={VictoryTheme.material} width={width} height={height*0.9} maxDomain={{ y: 18 }}
                containerComponent={<VictoryVoronoiContainer/>}
            >
                <VictoryGroup
                    data={props.data?.map((e) => {
                        const dataSet = {y: e.conversation_count, x: e.date.toString().replaceAll('-', '.')}
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
                    data={props.data?.map((e) => {
                        const dataSet = {y: e.missed_chat_count, x: e.date.toString().replaceAll('-', '.')}
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
                    data={props.data?.map((e) => {
                        const dataSet = {y: e.visitors_with_conversation_count, x: e.date.toString().replaceAll('-', '.')}
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
    )
}

export default Graph