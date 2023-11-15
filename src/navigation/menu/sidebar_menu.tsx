import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import BallotIcon from '@mui/icons-material/Ballot';
import PeopleIcon from '@mui/icons-material/People';


export const SidebarMenu = [
    {name: 'Home', route: '/', icon: <HomeIcon/>}, 
    {name: 'Products', route: '/products', icon: <BallotIcon/>}, 
    {name: 'Users', route: '/users', icon: <PeopleIcon/>}, 
    {name: 'Activity', route: '/activity', icon: <TaskIcon/>}
];