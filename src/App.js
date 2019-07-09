import React, { Component } from 'react';
import {
  Card,
  CardHead,
  CardActions,
  CardBody,
  PageSection,
  Title
} from '@patternfly/react-core';
import $ from 'jquery'
import { Chart, ChartBar, ChartStack } from '@patternfly/react-charts';
import './styles/App.css';

/**
 * @apiMock {DelayResponse} 2000
 * @api {get} /api/testo Get mock data
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": [
 *          { x: 'May 25', y: 1 },
 *          { x: 'May 26', y: 2 }
 *     }
 */
class App extends Component {
  state = { data: [] };

  componentDidMount() {
    // $.get('http://localhost:5000/api/testo', data => {
      // console.log(data);
      // this.setState({ data: success.data })
    // });
  }

  render() {
    // const { data } = this.state;

    const chartData = [
      { x: 'May 25', y: 1 },
      { x: 'May 26', y: 1 },
      { x: 'May 27', y: 1 },
      { x: 'May 28', y: 1 },
      { x: 'May 29', y: 2 },
      { x: 'May 30', y: 2 },
      { x: 'May 31', y: 2 },
      { x: 'Jun 1', y: 2 },
      { x: 'Jun 2', y: 2 },
      { x: 'Jun 3', y: 2 },
      { x: 'Jun 4', y: 2 },
      { x: 'Jun 5', y: 2 },
      { x: 'Jun 6', y: 3 },
      { x: 'Jun 7', y: 3 },
      { x: 'Jun 8', y: 3 },
      { x: 'Jun 9', y: 3 },
      { x: 'Jun 10', y: 4 },
      { x: 'Jun 11', y: 4 },
      { x: 'Jun 12', y: 4 },
      { x: 'Jun 13', y: 4 },
      { x: 'Jun 14', y: 4 },
      { x: 'Jun 15', y: 4 },
      { x: 'Jun 16', y: 4 },
      { x: 'Jun 17', y: 3 },
      { x: 'Jun 18', y: 3 },
      { x: 'Jun 19', y: 1 },
      { x: 'Jun 20', y: 2 },
      { x: 'Jun 21', y: 5 },
      { x: 'Jun 22', y: 3 },
      { x: 'Jun 23', y: 1 },
      { x: 'Jun 24', y: 1 }
    ];

    return (
      <PageSection>
        <Title size="lg">Example</Title>
        <Card className="curiosity-usage-graph">
          <CardHead>
            <h2 className="hello-world">Daily usage</h2>
            <CardActions>
              Dropdown goes here...
            </CardActions>
          </CardHead>
          <CardBody>
            <div className="stack-chart-container">
              <Chart height={200} domainPadding={{ x: [10, 2], y: [1, 1] }}>
                <ChartStack>
                  <ChartBar data={chartData} />
                </ChartStack>
              </Chart>
            </div>
          </CardBody>
        </Card>
      </PageSection>
    );
  }
}

export default App;
