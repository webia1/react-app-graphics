import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

class ResponsiveChartContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chartContainer">
        <ResponsiveContainer width="100%" height={360}>
          <AreaChart
            data={this.props.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="d" />
            <YAxis />
            <Legend verticalAlign="top" height={36} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <defs>
              <linearGradient id="seriesColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef00fc" stopOpacity={1} />
                <stop offset="50%" stopColor="#4138FA" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#2D7EF9" stopOpacity={0.4} />
              </linearGradient>
            </defs>
            <Area
              activeDot={{
                stroke: '#ef00fc',
                strokeWidth: 4,
                r: 6,
                fill: 'white'
              }}
              type="monotone"
              dataKey="v"
              stackId="1"
              stroke="#8884d8"
              fill="url(#seriesColor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default ResponsiveChartContainer;
