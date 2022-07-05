import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import bell from '../../assets/bell.png';
import './index.css';

const menu = [
  {
    title: 'Dashboard'
  },
  {
    title: 'Team'
  },
  {
    title: 'Projects'
  },
  {
    title: 'Calendar'
  }
]

// can send menu from hoc
function Header(/*menu*/) {
  return (
    <header className="w-full flex row justify-between bg-gray-800 p-4">
      <div className='flex row items-center'>
        <img src={logo} className="h-8 w-auto px-2 pr-8" alt="logo" />
        {
          menu.map((menuItem, index) => (
            <div key={index} className='px-4 text-white font-medium text-xs'>{menuItem.title}</div>
          ))
        }
      </div>
      <div className='flex row items-center'>
        <img src={bell} className="h-4 w-auto px-2" alt="bell" />
        <img src={avatar} className="h-8 w-auto px-2" alt="avatar" />
      </div>
    </header>
  );
}

export default Header;
