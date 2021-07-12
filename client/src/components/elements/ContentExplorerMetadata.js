import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout';
import { ContentExplorer } from 'box-ui-elements';
import messages from 'box-ui-elements/i18n/en-US';
import { ScaleLoader } from 'react-spinners';
import * as Constants from '../../Constants';


export default () => {
    const BOX_TOKEN_SERVICE = `http://${Constants.EXPRESS_SERVER_HOST}:${Constants.EXPRESS_SERVER_PORT}/box/explorer/token-downscope`;
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const eidAndMDTemplate = `enterprise_${Constants.ENTERPRISE_ID}.${Constants.METADATA_TEMPLATE_KEY}`;

    const defaultView = "metadata";
    const mdQuery = {
        from: eidAndMDTemplate,
        query: `${Constants.CASE_STATUS} IS NOT NULL`,
        fields: [
            'name',
            'size',
            'id',
            'sha1',
            `metadata.${eidAndMDTemplate}.${Constants.CASE_NUMBER}`,
            `metadata.${eidAndMDTemplate}.${Constants.CASE_OWNER}`,
            `metadata.${eidAndMDTemplate}.${Constants.CASE_STATUS}`,
            `metadata.${eidAndMDTemplate}.${Constants.CASE_PRIORITY}`,
            `metadata.${eidAndMDTemplate}.${Constants.CASE_START_DATE}`,
            `metadata.${eidAndMDTemplate}.${Constants.CASE_CLOSED_DATE}`,
            `metadata.${eidAndMDTemplate}.${Constants.CUSTOMER_NAME}`,
            `metadata.${eidAndMDTemplate}.${Constants.CUSTOMER_CONTACT_NAME}`,
            `metadata.${eidAndMDTemplate}.${Constants.CUSTOMER_CONTACT_EMAIL}`
        ],
        order_by:  [
        {
          field_key: Constants.CASE_START_DATE,
          direction: "asc"
        }
      ],
      ancestor_folder_id: Constants.EXPLORER_FOLDER_ID
    }

    const fields = [
        { key: Constants.CASE_NUMBER, displayName: 'Case Number'},
        { key: Constants.CASE_OWNER, displayName: 'Case Owner'},
        { key: Constants.CASE_STATUS, displayName: 'Case Status'},
        { key: Constants.CASE_PRIORITY, displayName: 'Case Priority'},
        { key: Constants.CASE_START_DATE, displayName: 'Start Date'},
        { key: Constants.CASE_CLOSED_DATE, displayName: 'End Date'},
        { key: Constants.CUSTOMER_NAME, displayName: 'Customer Name'},
        { key: Constants.CUSTOMER_CONTACT_NAME, displayName: 'Contact Name' },
        { key: Constants.CUSTOMER_CONTACT_EMAIL, displayName: 'Contact Email' }
    ];
    
    useEffect(() => {
        const fetchToken = async () => {
            setIsLoading(true);
            const result = await axios.get(BOX_TOKEN_SERVICE);
            setToken(result.data.accessToken);
            setIsLoading(false);
        }
        fetchToken();
    }, []);
    if(token) {
        return (
            <Layout>
                <div className="elements">
                <ContentExplorer
                    language="en-US"
                    messages={messages}
                    token={token}
                    metadataQuery={mdQuery}
                    fieldsToShow={fields}
                    defaultView={defaultView}
                />
                </div>
            </Layout>
        );
    }
    else {
        return(
        <Layout>
                <div className="elements">
                    <div className="spinner">
                        <ScaleLoader 
                            color={Constants.THEME_COLOR}
                            loading={isLoading}
                        />
                    </div>                
                </div>
            </Layout>
        );
    }
};
