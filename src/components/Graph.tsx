import { datum } from "../type"
import { VictoryLine, VictoryChart, VictoryVoronoiContainer, VictoryTheme, VictoryTooltip, VictoryGroup, VictoryScatter } from 'victory';
import React, { useEffect, useRef, useState } from "react";
import { useContainerDimensions, refElement} from '../hooks/useContainerDimensions'

const Graph = (props: {data?: datum[]}) => {
    useEffect(() => {
        const temp = props.data?.map(e => e.conversation_count)
        console.log(temp)
    }, [])

    const myRef = useRef<HTMLDivElement>(null)
    const { width } = useContainerDimensions(myRef as unknown as refElement)
    const [currentDsplay, setCurrentDsplay] = useState('all')

    if(props.data !== undefined) return (
        <div ref={myRef} style={{maxWidth: '800px', margin: 'auto', width: '80%', minWidth: '320px', fontFamily: 'Courier', height: '30rem'}}>
            <VictoryChart 
                domainPadding={0} theme={VictoryTheme.material} width={width} height={400} maxDomain={{ y: 18 }}
                containerComponent={
                    <VictoryVoronoiContainer
                    voronoiDimension="x"
                    labels={({ datum }) => `${datum.date}: ${datum.count}`}
                    labelComponent={
                        <VictoryTooltip
                        cornerRadius={0}
                        flyoutStyle={{ fill: "white" }}
                        />}
                    />}>
                <VictoryLine
                    data={props.data?.map((e) => {
                        const dataSet = {count: e.conversation_count, date: e.date.toString()}
                        return dataSet
                    })}
                    style={{
                        data: {
                        stroke: "black",
                        strokeWidth: ({ active }) => active ? 1 : 1
                        },
                        labels: { fill: "black" }
                    }}
                    animate={{
                        duration: 500,
                        onLoad: { duration: 500 }
                      }}
                    interpolation="linear"
                    x = "date"
                    y = "count"
                />
                <VictoryLine
                    data={props.data?.map((e) => {
                        const dataSet = {count: e.missed_chat_count, date: e.date.toString()}
                        return dataSet
                    })}
                    style={{
                        data: {
                        stroke: "grey",
                        strokeWidth: ({ active }) => active ? 1 : 1
                        },
                        labels: { fill: "grey" }
                    }}
                    animate={{
                        duration: 500,
                        onLoad: { duration: 500 }
                      }}
                    interpolation="linear"
                    x = "date"
                    y = "count"
                />
                <VictoryLine
                    data={props.data?.map((e) => {
                        const dataSet = {count: e.visitors_with_conversation_count, date: e.date.toString()}
                        return dataSet
                    })}
                    style={{
                        data: {
                        stroke: "CadetBlue",
                        strokeWidth: ({ active }) => active ? 1 : 1
                        },
                        labels: { fill: "CadetBlue" }
                    }}
                    animate={{
                        duration: 500,
                        onLoad: { duration: 500 }
                      }}
                    interpolation="linear"
                    x = "date"
                    y = "count"
                />
            </VictoryChart>  
        </div>
    )
    return <div>No data</div>
}

export default Graph