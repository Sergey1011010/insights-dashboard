import React from 'react';
import propTypes from 'prop-types';

import { Button, Card, CardBody, CardHeader, CardFooter, Level, LevelItem, Title } from '@patternfly/react-core';
import { DownloadIcon } from '@patternfly/react-icons';

// import './TemplateCard.scss';

export const TemplateCard = ({ appName, children, ...props }) => {
    return (
        <Card className={ `ins-c-dashboard__card ins-c-dashboard__card--${appName}` } { ...props }>
            { children }
        </Card>
    );
};

TemplateCard.propTypes = {
    appName: propTypes.string,
    children: propTypes.any
};

export const TemplateCardHeader = ({ title, onDownload, children, ...props }) => {
    return (
        <CardHeader className='ins-c-dashboard__card--header'  { ...props }>
            <Level>
                { title &&
                    <LevelItem>
                        <Title headingLevel="h2" size="xl"> { title } </Title>
                    </LevelItem>
                }
                <LevelItem>
                    { children }
                    { onDownload &&
                        <Button variant='link' icon={ <DownloadIcon/> } onClick={ onDownload }>Report</Button>
                    }
                </LevelItem>
            </Level>
        </CardHeader>
    );
};

TemplateCardHeader.propTypes = {
    title: propTypes.string,
    children: propTypes.any,
    onDownload: propTypes.func
};

export const TemplateCardBody = ({ children, ...props }) => {
    return (
        <CardBody className='ins-c-dashboard__card--body' { ...props }>
            { children }
        </CardBody>
    );
};

TemplateCardBody.propTypes = {
    children: propTypes.any
};

export const TemplateCardFooter = ({ children, ...props }) => {
    return (
        <CardFooter className='ins-c-dashboard__card--footer' { ...props }>
            { children }
        </CardFooter>
    );
};

TemplateCardFooter.propTypes = {
    children: propTypes.any
};
