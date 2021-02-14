import { useEffect } from "react"
import { VictoryGroup, VictoryTooltip, VictoryLine, VictoryScatter } from "victory"
import { datapoint } from '../type'

// custom Victory group for easier adoption and drawing graph from Victory. Does not work at the moment
// due to VictoryChart not regconizing imported Victory component
const CustomVictoryGroup = (props: {data: datapoint[], title: string, color: string}) => {
    useEffect(() => {
        console.log('???')
    }, [props.data])
    return (
        <VictoryGroup
            data={props.data}
            color = {props.color}
            animate={{
                duration: 500,
                onLoad: { duration: 500 }
            }}
            labels={({ datum }) => `${props.title}:\n${datum.x}: ${datum.y}`}
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
    )
}

export default CustomVictoryGroup