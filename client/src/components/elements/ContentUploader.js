import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout';
import { ContentUploader } from 'box-ui-elements';
import { ScaleLoader } from 'react-spinners';
import { THEME_COLOR, EXPRESS_SERVER_HOST, EXPRESS_SERVER_PORT, UPLOAD_FOLDER_ID } from '../../Constants';


export default () => {
    const BOX_TOKEN_SERVICE = `http://${EXPRESS_SERVER_HOST}:${EXPRESS_SERVER_PORT}/box/uploader/token-downscope`;
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
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
                <ContentUploader
                    logoUrl={""}
                    rootFolderId={UPLOAD_FOLDER_ID}
                    token={token}
                    canSetShareAccess={true}
                    canUpload={true}
                    canCreateNewFolder={true}
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
                            color={THEME_COLOR}
                            loading={isLoading}
                        />
                    </div>                
                </div>
            </Layout>
        );
    }
};
