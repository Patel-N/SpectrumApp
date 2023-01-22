import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container} from '@material-ui/core';
import { ProSidebarProvider } from "react-pro-sidebar";
import ReactDOM from 'react-dom';
import * as V from 'victory';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

export default function DonutGraph({monthlyUserExpenses}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fillColor = "gold";

  return (
    <Box sx={{ display: 'flex' }}>
      <svg viewBox="0 0 450 350">
        <V.VictorySharedEvents
          events={[{
            childName: ["pie"],
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [{
                  childName: ["pie"],
                  mutation: (props) => {
                    return {
                      style: Object.assign({}, props.style, { fill: fillColor })
                    };
                  }
                }];
              },
              onMouseOut: () => {
                return [{
                  childName: ["pie"],
                  mutation: () => {
                    return null;
                  }
                }];
              }
            }
          }]}
        >
          <g transform={"translate(0, -75)"}>
            <V.VictoryPie name="pie"
              width={250}
              height={400}
              standalone={false}
              style={{ labels: { fontSize: 9, padding: 10 } }}
              data={monthlyUserExpenses}
              colorScale={["#21DAFF","#312F2F","#FAA916","#5449CC","#FF90D3","#87D68D","#F06543","#9d75cbff"]}
              innerRadius={25}
              padAngle={2}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
              // labelComponent={<V.VictoryLabel angle={-5}/>}
              // labels={({ datum }) => datum.y}
              // radius={({ datum }) => 20 + datum.y * 20}
              />
          </g>
           
          </V.VictorySharedEvents>
      </svg>

      {/* <V.VictoryChart tickLabelComponent={<V.VictoryLabel angle={45}/>}>
        <V.VictoryAxis dependentAxis
        />
        <V.VictoryPie name="pie"
                width={400}
                height={400}
                standalone={false}
                style={{ labels: { fontSize: 10, padding: 10 } }}
                data={monthlyUserExpenses}
                colorScale={["#21DAFF","#312F2F","#FAA916","#5449CC","#FF90D3","#87D68D","#F06543","#9d75cbff"]}
                innerRadius={25}
                padAngle={2}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 }
                }}
              // labelComponent={<V.VictoryLabel angle={-5}/>}
              // labels={({ datum }) => datum.y}
              // radius={({ datum }) => 20 + datum.y * 20}
              />
           
          </V.VictoryChart> */}
    </Box>
  );
}

