import { Menu, Dropdown } from 'antd';
const menu = (
    <Menu>
        <Menu.Item key="1">
            <span>退出系统</span>
        </Menu.Item>
    </Menu>
);
const UserDropDown = ({ className }) => {
    return (
        <Dropdown className={className}  overlay={menu}>
            <span>
                <img src="https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640" alt="" />
                <span>admin</span>
            </span>
        </Dropdown>
    );
};

export default UserDropDown;
