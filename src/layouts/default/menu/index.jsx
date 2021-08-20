import { connect } from 'react-redux';
import PropTypes from "prop-types"
import { BasicMenu } from "@/components/Menu";
import { useMenuSetting } from "@/hooks/setting/useMenuSetting"


const LayoutMenu = (props) => {
    console.log(props);
    const { getMenuTheme } = useMenuSetting()
    // 展开的菜单
    const { backMenuList } = props;
    return (
        <BasicMenu theme={getMenuTheme} mode='inline' items={backMenuList} />
    );
};

LayoutMenu.prototype = {
    theme:PropTypes.string.isRequired
}


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
