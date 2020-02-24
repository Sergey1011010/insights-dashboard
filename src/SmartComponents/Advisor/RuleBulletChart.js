// import PropTypes from 'prop-types';
import './_Advisor.scss';

import { ChartBullet, ChartContainer, ChartLegend, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

import React from 'react';
import { SEVERITY_MAP } from './Constants';

const RuleBulletChart = () => {
    const data = [{ name: 'Moderate', y: 3 }, { name: 'Critical', y: 15 }, { name: 'Low', y: 20 }, { name: 'Important', y: 50 }];
    const legendData = data.map(item => ({ name: `${item.y} ${item.name}`, symbol: { type: null } }));

    const legendClick = () => {
        return [{
            target: 'labels',
            mutation: (data) => {
                const risk = data.datum.name.split(' ')[1].toLowerCase();
                history.push(`/rules?total_risk=${SEVERITY_MAP[risk]}&reports_shown=true&impacting=true&offset=0&limit=10`);
            }
        }];
    };

    return <React.Fragment>
        <ChartContainer
            ariaDesc='Rules bullet chart'
            ariaTitle='Rules bullet chart'
            className='bulletChartOverrides'
        >
            <ChartBullet
                constrainToVisibleArea
                height={ 150 }
                bulletSize={ 200 }
                labels={ ({ datum }) => `${datum.name}: ${datum.y}` }
                padding={ {
                    bottom: 150 // Adjusted to accommodate legend
                } }
                primarySegmentedMeasureData={ data }
                // primarySegmentedMeasureLegendData={ [{ name: 'Critical' }, { name: 'Important' }, { name: 'Moderate' }, { name: 'Low' }] }
                // legendAllowWrap={ true }`
                // legendPosition='bottom-left'
                standalone={ false }
                width={ 600 }
                axisComponent={ <React.Fragment /> }
                themeColor={ ChartThemeColor.multiOrdered }

            />
        </ChartContainer>

        <ChartLegend
            containerComponent={ <ChartContainer ariaDesc='Rules bullet chart legend'
                ariaTitle='Rules bullet chart legend'
                className='bulletLegendOverrides'
            /> }
            // centerTitle
            title='99 Systems with rule hits'
            data={ legendData }
            events={ [{
                target: 'labels', eventHandlers: {
                    onClick: legendClick,
                    onMouseOver: () => {
                        return [{
                            mutation: (data) => {
                                return {
                                    style: Object.assign({}, data.style, { cursor: 'pointer' })
                                };
                            }
                        }];
                    }
                }
            }] }
            orientation='horizontal'
            // width={ 1 }
            // y={ 0 }
            themeColor={ ChartThemeColor.multiOrdered }
            themeVariant={ ChartThemeVariant.light }
        />
    </React.Fragment>;
};

RuleBulletChart.propTypes = {};

export default RuleBulletChart;
