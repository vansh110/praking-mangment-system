import Dashboard from '../components/admin/dashboard/Dashboard';
// import Profile from '../components/admin/Profile';

import Owner from '../components/admin/owner/Owner';
import ViewOwner from '../components/admin/owner/ViewOwner';
import EditOwner from '../components/admin/owner/EditOwner';

import Guest from '../components/admin/guest/Guest';
import ViewGuest from '../components/admin/guest/ViewGuest';
import EditGuest from '../components/admin/guest/EditGuest';

import Slot from '../components/admin/slot/Slot';
import ViewSlot from '../components/admin/slot/ViewSlot';
import EditSlot from '../components/admin/slot/EditSlot';

import Vehicle from '../components/admin/vehicle/Vehicle';
import ViewVehicle from '../components/admin/vehicle/ViewVehicle';
import EditVehicle from '../components/admin/vehicle/EditVehicle';

import Slottrans from '../components/admin/slottrans/Slottrans';
import ViewSlottrans from '../components/admin/slottrans/ViewSlottrans';
import EditSlottrans from '../components/admin/slottrans/EditSlottrans';


const routes = [
    { path: '/admin', exact: true, name: 'Admin'},
    { path: '/admin/Dashboard', exact: true, name: 'Dashboard', component: Dashboard },

    { path: '/admin/add-owner', exact: true, name: 'Owner', component: Owner },
    { path: '/admin/view-owner', exact: true, name: 'ViewOwner', component: ViewOwner },
    { path: '/admin/edit-owner/:id', exact: true, name: 'EditOwner', component: EditOwner },
    
    { path: '/admin/add-guest', exact: true, name: 'Guest', component: Guest },
    { path: '/admin/view-guest', exact: true, name: 'ViewGuest', component: ViewGuest },
    { path: '/admin/edit-guest/:id', exact: true, name: 'EditGuest', component: EditGuest },    


    { path: '/admin/add-slot', exact: true, name: 'Slot', component: Slot },
    { path: '/admin/view-slot', exact: true, name: 'ViewSlot', component: ViewSlot },
    { path: '/admin/edit-slot/:id', exact: true, name: 'EditSlot', component: EditSlot },

    { path: '/admin/add-vehicle', exact: true, name: 'Vehicle', component: Vehicle },
    { path: '/admin/view-vehicle', exact: true, name: 'ViewVehicle', component: ViewVehicle },
    { path: '/admin/edit-vehicle/:id', exact: true, name: 'EditVehcile', component: EditVehicle },

    { path: '/admin/add-slottrans', exact: true, name: 'Slottrans', component: Slottrans },
    { path: '/admin/view-slottrans', exact: true, name: 'ViewSlottrans', component: ViewSlottrans },
    { path: '/admin/edit-slottrans/:id', exact: true, name: 'EditSlottrans', component: EditSlottrans },

    // { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;