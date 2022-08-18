import "./sidebar.css"
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import DiscountIcon from '@mui/icons-material/Discount';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import SummarizeIcon from '@mui/icons-material/Summarize';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle1Wrapper">

                    </div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <div className="avatarWrapper">
                                
                                <div class="flexbox">
                                    <img src="https://i.etsystatic.com/31610244/r/il/c02c73/3336339589/il_fullxfull.3336339589_s449.jpg" alt="Katana" className="topAvatar" />
                                    <div>
                                        <h1>John Smith</h1>
                                        <h2>Admin</h2>
                                    </div>
                                </div>
                                
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="sidebarWrapper2"></div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle2">General</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <OtherHousesIcon />
                        Dashboard
                    </li>
                    <li className="sidebarListItem">
                        <DiscountIcon />
                        Coupon
                    </li>
                    <li className="sidebarListItem">
                        <StoreIcon />
                        Store
                    </li>
                    <li className="sidebarListItem">
                        <HourglassEmptyIcon />
                        Product
                    </li>
                    <li className="sidebarListItem">
                        <InventoryIcon />
                        Reports
                    </li>
                    <li className="sidebarListItem">
                        <SummarizeIcon />
                        Generate Flyers
                    </li>

                </ul>
            </div>



        </div>
    )
}
