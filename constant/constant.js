import { faDashboard, faLayerGroup, faReceipt, faShield, faSignOut, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const navs = [
    {
        id: 1,
        name: "Dashboard",
        icon: faDashboard
    },
    {
        id: 2,
        name: "reports",
        icon: faReceipt
    }, {
        id: 3,
        name: "Supervisor",
        icon: faUserPlus
    }, {
        id: 4,
        name: "Manage Site",
        icon: faLayerGroup
    }, {
        id: 5,
        name: "Shift",
        icon: faShield
    }, {
        id: 5,
        name: "Logout",
        icon: faSignOut
    }
];

export default navs;