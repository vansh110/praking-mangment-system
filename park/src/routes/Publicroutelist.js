import Home from '../components/frontend/home/Home'
import About from '../components/frontend/About'
import Guestt from '../components/frontend/Guestt'
import ViewGuestt from '../components/frontend/ViewGuestt'
import Ownerbooking from '../components/frontend/Ownerbooking'
import Bk from '../components/frontend/Bk'
import Payment from '../components/frontend/Payment'

// import Booking from '../components/frontend/Booking'
import Page403 from '../components/errors/Page403'
import Page404 from '../components/errors/Page404'
import Register from '../components/frontend/auth/Register'
import Login from '../components/frontend/auth/Login'

//....
import ViewGuest from '../components/frontend/booking/ViewGuest'
import ViewSlottrans from '../components/frontend/booking/ViewSlottrans'
import SlotDetails from '../components/frontend/booking/SlotDetails'


const publicRoutesList = [
    {path: '/', exact: true, name: 'Home', component:Home},
    {path: '/about', exact: true, name: 'About', component:About},

    //....
    {path: '/guestt', exact: true, name: 'Guestt', component:Guestt},
    {path: '/viewguestt', exact: true, name: 'ViewGuestt', component:ViewGuestt},
    //....

    {path: '/Ownerbooking', exact: true, name: 'Ownerbooking', component:Ownerbooking},
    {path: '/bk', exact: true, name: 'Bk', component:Bk},
    {path: '/Payment', exact: true, name: 'Payment', component:Payment},

    ////.....
    {path: '/booking', exact: true, name: 'ViewGuest', component:ViewGuest},
    {path: '/booking/:slot_id', exact: true, name: 'ViewSlottrans', component:ViewSlottrans},
    {path: '/booking/:slot_id/:guest_name', exact: true, name: 'SlotDetails', component:SlotDetails},
    {path: '/403', exact: true, name: 'Page403', component:Page403},
    {path: '/404', exact: true, name: 'Page404', component:Page404},
    {path: '/login', exact: true, name: 'Login', component:Login},
    {path: '/register', exact: true, name: 'Register', component:Register},
    
];

export default publicRoutesList;