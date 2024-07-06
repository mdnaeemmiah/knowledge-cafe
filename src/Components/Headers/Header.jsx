import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between md:text-6xl text-3xl border-b-4 max-w-7xl mx-auto'>
            <h1 >Knowledge Cafe</h1>
            <img src={profile} alt="" /> 
        </div>
      
    );
};

export default Header;