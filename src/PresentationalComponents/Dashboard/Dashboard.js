/* eslint-disable no-console */
import './_dashboard.scss';

import { Card } from '@patternfly/react-core/dist/js/components/Card/Card';
import { CardBody } from '@patternfly/react-core/dist/js/components/Card/CardBody';
import { CardHeader } from '@patternfly/react-core/dist/js/components/Card/CardHeader';
import { Divider } from '@patternfly/react-core/dist/js/components/Divider/Divider';
import { Main } from '@red-hat-insights/insights-frontend-components/components/Main';
import { PageSection } from '@patternfly/react-core/dist/js/components/Page/PageSection';
import PropTypes from 'prop-types';
import React from 'react';
import { Title } from '@patternfly/react-core/dist/js/components/Title/Title';
import asyncComponent from '../../Utilities/skeletonAsyncCard';
import { injectIntl } from 'react-intl';
import messages from '../../Messages';

const AdvisorCard = asyncComponent(() => import('../../SmartComponents/Advisor/Advisor'));
const ComplianceCard = asyncComponent(() => import('../../SmartComponents/Compliance/ComplianceCard'));
const VulnerabilityCard = asyncComponent(() => import('../../SmartComponents/Vulnerability/VulnerabilityCard'));

const Dashboard = ({ intl }) =>
    <React.Fragment>
        <PageSection>
            <Title headingLevel="h1" size="2xl">
                {intl.formatMessage(messages.dashboardTitle)}
            </Title>
            <div className="ins-timestamp">
                Time stamp goes here
            </div>
        </PageSection>
        <Main className='ins-l-dashboard'>
            <div className="dashboard-card-group">
                <div className="dashboard-card-system-inventory">
                    <Card>
                        <CardHeader>
                            System inventory and status
                        </CardHeader>
                        <CardBody>
                            Here is a lot of test content to see how the card behaves.
                        </CardBody>
                    </Card>
                </div>
                <div className="dashboard-card-entitlements">
                    <Card>
                        <CardHeader>
                            Entitlements utilized
                        </CardHeader>
                        <CardBody>
                            Here is a lot of test content to see how the card behaves.
                        </CardBody>
                    </Card>
                </div>
                <div className="dashboard-card-operating-systems">
                    <Card>
                        <CardHeader>
                            Operating systems
                        </CardHeader>
                        <CardBody>
                            Here is a lot of test content to see how the card behaves.
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="dashboard-card-rules">
                <AdvisorCard />
            </div>
            <div className="dashboard-card-vulnerabilities">
                <VulnerabilityCard />
            </div>
            <div className="dashboard-card-compliance-remediations">
                <ComplianceCard />
                <Divider></Divider>
                <Card>
                    <CardHeader>
                        Remediations
                    </CardHeader>
                    <CardBody>
                        Here is a lot of test content to see how the card behaves.
                    </CardBody>
                </Card>
            </div>
            <div className="dashboard-card-custom-policies">
                <Card>
                    <CardHeader>
                        Custom policies
                    </CardHeader>
                    <CardBody>
                        Here is a lot of test content to see how the card behaves.
                    </CardBody>
                </Card>
            </div>
        </Main>
    </React.Fragment>;

Dashboard.propTypes = { intl: PropTypes.any };

export default injectIntl(Dashboard);
