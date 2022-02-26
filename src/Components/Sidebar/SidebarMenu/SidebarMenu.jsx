
import "./SidebarMenu.css"
 

const SidebarMenu = ({options}) => {
    const {sidebarTitle,sidebarListItem} = options
  return (
    <div className="sidebar-menu">
    <h3 className="sidebar-title">
     {sidebarTitle}
    </h3>
    <ul className="sidebar-list">
{
    sidebarListItem.map((item,i)=>(
        <li className="sidebar-list-item" key={i}>
            <a href="/">
            {Object.values(item)[0]} {Object.keys(item)[0]}
            </a>
        </li>
    ))
}


    </ul>
</div>
  )
}

export default SidebarMenu