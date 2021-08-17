import { connect } from 'react-redux';
import { BasicMenu } from "@/components/Menu"

const LayoutMenu = (props) => {
    // 展开的菜单
    const { backMenuList } = props;
    return (
        <BasicMenu items={backMenuList} />
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
