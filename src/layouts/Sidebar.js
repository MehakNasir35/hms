import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBed, faBuilding, faFileInvoice, faFileInvoiceDollar, faGauge, faInfoCircle, faUsd } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  {
    title: "Dashboard",
    href: "/home",
    icon: faGauge,
  },
  {
    title: "Room Management",
    href: "/home/roomManagement",
    icon: faBed,
  },
  {
    title: "Building Map",
    href: "/home/buildingMap",
    icon: faBuilding,
  },
  {
    title: "Student Information",
    href: "/home/studentInformation",
    icon: faInfoCircle,
  },
  {
    title: "Registration",
    href: "/home/registration",
    icon: faAddressCard,
  },
  {
    title: "Expenses",
    href: "/home/expenses",
    icon: faFileInvoiceDollar,
  },
  {
    title: "Invoices",
    href: "/home/invoices",
    icon: faFileInvoice,
  },
  {
    title: "Generate Invoices",
    href: "/home/generateInvoice",
    icon: faFileInvoice,
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
                    ? "text-primary nav-link py-3 activeLink"
                    : "nav-link text-white py-3"
                }
              >
                <FontAwesomeIcon icon={navi.icon}/>
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
