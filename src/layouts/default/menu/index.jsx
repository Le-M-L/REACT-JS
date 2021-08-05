import { useState, useEffect } from "react"
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import classnames from "classnames"
const SubMenu = (props) => {
    return <Menu.SubMenu {...props}   >
        {
            props.children && props.children.map(item => {
                return item.children ?
                    <SubMenu key={item.path} title={item.title} >{item.children}</SubMenu> :
                    <Menu.Item key={item.path} icon={<UserOutlined />}> {item.title} </Menu.Item>
            })
        }
    </Menu.SubMenu>
}


const LayoutMenu = (props) => {
    // 主题
    const { theme } = props;
    // 展开的菜单
    const [openKeys, setOpenKeys] = useState([])
    const { backMenuList } = props;
    console.log(backMenuList)
    const history = useHistory();
    const location = useLocation();
    const params = useParams()
    const routeMatch = useRouteMatch()
    const handleClick = ({ key }) => {
        history.push(key)
        // setOpenKeys([location.pathname])
       
    };

    // subMenu 展开/关闭的回调
    const openChange = (openKey) => {
        console.log(openKey)
        setOpenKeys([...openKey])
    }

    useEffect(() => {
        
        return () => {

        }
    },[])

    return (
        <div>
            <Menu onClick={handleClick} onOpenChange={openChange} theme={theme} mode="inline"  openKeys={openKeys}>
                {
                    backMenuList.map(item => (item.children ?
                        <SubMenu key={item.path} title={item.title} icon={<UserOutlined />} >{item.children}</SubMenu> :
                        <Menu.Item key={item.path} icon={<UserOutlined />}> {item.title} </Menu.Item>))
                }

            </Menu>
        </div>
    );
};

const mapStateToProps = ({ routeMenu: { backMenuList, frontMenuList } }) => {
    return {
        backMenuList,
        frontMenuList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(LayoutMenu);
