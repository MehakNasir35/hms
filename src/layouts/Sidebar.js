import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/home",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Room Management",
    href: "roomManagement",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Building Map",
    href: "buildingMap",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Student Information",
    href: "studentInformation",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Registration",
    href: "registration",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Expenses",
    href: "expenses",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Invoices",
    href: "invoices",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Generate Invoices",
    href: "generateInvoice",
    icon: "bi bi-speedometer2",
  },
  
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-center">
      
        <Logo />

        <span className="ms-auto d-lg-none">
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-white py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
