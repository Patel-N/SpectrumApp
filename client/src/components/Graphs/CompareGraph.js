import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { ProSidebarProvider } from "react-pro-sidebar";
import ReactDOM from 'react-dom';
import * as V from 'victory';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { VictoryBar } from 'victory';

export default function CompareGraph({ monthlyUserExpenses, monthlyAverageExpenses }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fillColor = "gold";
  const labelList = []
  monthlyUserExpenses.forEach(element => {
    console.log(element)
    labelList.push(element.x)
  });
  console.log("monthlyAverageExpenses: " + monthlyAverageExpenses)
  console.log("monthlyUserExpenses: " + monthlyUserExpenses)

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <svg viewBox="0 0 450 350">
        <V.VictorySharedEvents
          events={[{
            childName: ["bargroup"],
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [{
                  childName: ["bargroup"],
                  mutation: (props) => {
                    return {
                      style: Object.assign({}, props.style, { fill: fillColor })
                    };
                  }
                }];
              },
              onMouseOut: () => {
                return [{
                  childName: ["bargroup"],
                  mutation: () => {
                    return null;
                  }
                }];
              }
            }
          }]}
        >
          <g transform={"translate(0, -75)"}>
            <V.VictoryGroup name="bargroup" offset={20}
              width={400}
              height={450}
              standalone={false}
              colorScale={["#E0D3DE", "#9E0059", "#5449CC", "#FF90D3", "#87D68D", "#F06543", "#9d75cbff"]}
              style={{
                data: { width: 20, padding: 40 },
                labels: { fontSize: 20, padding: 10 }
              }}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
            // labels={Object.values(Object.values(Object.values(monthlyUserExpenses)))}
            // labels={["spring", "summer", "fall", "winter"]}
            // labels={({ datum }) => datum.title}
            // labelComponent={<V.VictoryLabel dy={20}/>}


            >
              <VictoryBar data={monthlyUserExpenses}
              //  barRatio={0.8}
              // barWidth={20}
              //  categories={labelList}
              ></VictoryBar>

              <VictoryBar data={monthlyAverageExpenses}
                // barWidth={20}

                labelComponent={<V.VictoryLabel angle={65} dy={10} />}
                labels={labelList}
              ></VictoryBar>

            </V.VictoryGroup>
          </g>

        </V.VictorySharedEvents>
      </svg> */}

      <V.VictoryChart tickLabelComponent={<V.VictoryLabel angle={45} />}>
        {/* <V.VictoryAxis dependentAxis
            angle={25}
        /> */}


        <V.VictoryAxis
          style={{
            axis: { stroke: 'black' },
            axisLabel: { fontSize: 16, },
            ticks: { stroke: 'black' },
            tickLabels: { fontSize: 14 },
            grid: { stroke: 'black', strokeWidth: 0.25 }

          }} dependentAxis
        />
        <V.VictoryAxis
          style={{
            axis: { stroke: 'black' },
            axisLabel: { fontSize: 16 },
            ticks: { stroke: 'black' },
            tickLabels: { fontSize: 10, padding: 1, angle:45, verticalAnchor: "middle", textAnchor:'start' },
          }} />
        <V.VictoryGroup name="bargroup" offset={20}
          width={400}
          height={450}
          standalone={false}
          colorScale={["orange", "#6B6D76", "#5449CC", "#FF90D3", "#87D68D", "#F06543", "#9d75cbff"]}
          style={{
            data: { width: 20, padding: 40 },
            labels: { fontSize: 20, padding: 10 }
          }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}

        // labels={Object.values(Object.values(Object.values(monthlyUserExpenses)))}
        // labels={["spring", "summer", "fall", "winter"]}
        // labels={({ datum }) => datum.title}
        // labelComponent={<V.VictoryLabel dy={20}/>}

        >
          <VictoryBar data={monthlyUserExpenses}
          //  barRatio={0.8}
          // barWidth={20}
          //  categories={labelList}
          ></VictoryBar>

          <VictoryBar data={monthlyAverageExpenses}
          // barWidth={20}
          // labels={labelList}
          ></VictoryBar>

        </V.VictoryGroup>
      </V.VictoryChart>
    </Box>
  );
}