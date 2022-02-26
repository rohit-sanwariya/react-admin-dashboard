import "./Sidebar.css";
import { LineStyle, BarChart, TrendingUp, PermIdentity, Storefront, AttachMoney, Report, Timeline, WorkOutline, ChatBubbleOutline, DynamicFeed, MailOutline, BarChartOutlined } from "@mui/icons-material";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import { useContext } from 'react';
import { SidebarContext } from '../../App';
const Sidebar = () => {
  const sidebarContext = useContext(SidebarContext)
  console.log(sidebarContext);
  const menuProps = [
    {
      sidebarTitle: "Dashboard",
      sidebarListItem: [
        { Home: <LineStyle className="sidebar-list-icon"  /> },
        { Analytics: <BarChart className="sidebar-list-icon"  /> },
        { Sales: <TrendingUp className="sidebar-list-icon"  /> },
      ],
    },
    {
      sidebarTitle: "Quick Links",
      sidebarListItem: [
        { Users: <PermIdentity className="sidebar-list-icon"   /> },
        { Products: <Storefront className="sidebar-list-icon"   /> },
        { Transactions: <AttachMoney className="sidebar-list-icon"   /> },
        { Reports: <BarChartOutlined className="sidebar-list-icon"    /> },
      ],
    },
    {
      sidebarTitle: "Notifications",
      sidebarListItem: [
        {  Mail: <MailOutline  className="sidebar-list-icon" /> },
        { Feedback: <DynamicFeed  className="sidebar-list-icon"  /> },
        { Messages: <ChatBubbleOutline  className="sidebar-list-icon"  /> },
      ],
    },
    {
      sidebarTitle: "Staff",
      sidebarListItem: [
        { Manage: <WorkOutline  className="sidebar-list-icon"  /> },
        { Analytics: <Timeline  className="sidebar-list-icon"  /> },
        { Report: <Report  className="sidebar-list-icon"  /> },
      ],
    },
  ];
  return (
    <aside className="sidebar">
      <div className={sidebarContext?`sidebar-container open`:`sidebar-container`}>
       {
           menuProps.map((item,i)=>(
               <SidebarMenu key={i} options={item}  />
           ))
       }
     
      </div>
    </aside>
  );
};

export default Sidebar;
