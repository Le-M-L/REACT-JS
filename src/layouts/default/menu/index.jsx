import { connect } from 'react-redux';
import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { increase, decrease } from '@/store/actions/count';
const { SubMenu } = Menu;
const LayoutMenu = ({ count, increase }) => {
    const handleClick = ({ key }) => {
        increase(2);
    };

    return (
        <div>
            <span style={{ color: '#fff' }}> {count.count}</span>
            <Menu onClick={handleClick} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
};
const mapStateToProps = ({ count }) => {
    return {
        count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increase: (...args) => dispatch(increase(...args)),
        decrease: (...args) => dispatch(decrease(...args)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutMenu);
