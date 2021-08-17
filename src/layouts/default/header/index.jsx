import { Layout } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import AppLogin from '../../../components/Application/src/AppLogin';
import { UserDropDown } from './components';
import LayoutMenu from "../menu"

import './index.less';

const prefixCls = 'layout-header';

const LayoutHeader = () => {
    return (
        <Layout.Header className={prefixCls}>
            <AppLogin />
            <div className={`${prefixCls}-content`}>
                <LayoutMenu isHorizontal mode="horizontal" />
            </div>
            <div className={`${prefixCls}-action`}>
                <UserDropDown className={`${prefixCls}-action_item userDropDown`} />

                <div className={`${prefixCls}-action_item`}>
                    <SettingOutlined />
                </div>
            </div>
        </Layout.Header>
    );
};

export default LayoutHeader;
