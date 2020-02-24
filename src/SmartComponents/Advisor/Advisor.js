import './_Advisor.scss';

import * as AppActions from '../../AppActions';

import { INCIDENT_URL, NEW_RULES_URL } from './Constants';
import { TemplateCard, TemplateCardBody, TemplateCardHeader } from '../../PresentationalComponents/Template/TemplateCard';

import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import { Link } from 'react-router-dom';
import Loading from '../../PresentationalComponents/Loading/Loading';
import PropTypes from 'prop-types';
import React from 'react';
import RuleBulletChart from './RuleBulletChart';
import { connect } from 'react-redux';
import routerParams from '@redhat-cloud-services/frontend-components-utilities/files/RouterParams';

/**
 * Advisor Card for showing count/severity of rule hits
 */
const Advisor = () => {

    return <TemplateCard appName='Advisor'>
        <TemplateCardHeader title='Rules' onDownload={ () => console.log('here') } >
            {false ? null :
                <React.Fragment>
                    <Link to={ `${NEW_RULES_URL}` }><InfoCircleIcon className='ins-c-summary__icon-info' />
                        6 new rules impacting 10 billion systems
                    </Link>
                </React.Fragment>}
        </TemplateCardHeader>
        <TemplateCardBody>
            {false ? <Loading /> :
                <React.Fragment>
                    <div className='ins-c-summary'>
                        <ExclamationCircleIcon className='ins-c-summary__icon ins-c-summary__icon-critical' />
                        <span className='ins-c-summary__emphasis'>{25}</span>
                        <span className='ins-c-summary__label'>
                            <Link to={ `${INCIDENT_URL}` }> Incidents detected </Link>
                        </span>
                    </div>
                    <RuleBulletChart />
                </React.Fragment>}
        </TemplateCardBody>
    </TemplateCard>;
};

Advisor.propTypes = {
    fetchStatsRules: PropTypes.func,
    stats: PropTypes.object,
    fetchStatsRulesStatus: PropTypes.string,
    fetchIncidents: PropTypes.func,
    incidents: PropTypes.object,
    fetchIncidentsStatus: PropTypes.string
};

const mapStateToProps = (state, ownProps) => ({
    criticalVulnerabilities: state.DashboardStore.criticalVulnerabilities,
    criticalVulnerabilitiesFetchStatus: state.DashboardStore.criticalVulnerabilitiesFetchStatus,
    latestVulnerabilities: state.DashboardStore.latestVulnerabilities,
    latestVulnerabilitiesFetchStatus: state.DashboardStore.latestVulnerabilitiesFetchStatus,
    vulnerabilities: state.DashboardStore.vulnerabilities,
    vulnerabilitiesFetchStatus: state.DashboardStore.vulnerabilitiesFetchStatus,
    ...ownProps
});

const mapDispatchToProps = dispatch => ({
    fetchCriticalVulnerabilities: (url) => dispatch(AppActions.fetchCriticalVulnerabilities(url)),
    fetchLatestVulnerabilities: (url) => dispatch(AppActions.fetchLatestVulnerabilities(url)),
    fetchVulnerabilities: (url) => dispatch(AppActions.fetchVulnerabilities(url))
});

export default routerParams(connect(
    mapStateToProps,
    mapDispatchToProps
)(Advisor));
