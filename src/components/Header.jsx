

const Header = () => {
      return (
            <div className="flex items-center justify-between gap-4 bg-blue-400 p-6">
                  <h3 className="text-2xl font-bold text-orange-600">Rest Countries</h3>
                 <nav className="text-white">
                  <a className="mr-2 text-sm font-medium" href="/home">Home</a>
                  <a className="mr-2 text-sm font-medium" href="/home">About</a>
                  <a className="mr-2 text-sm font-medium" href="/home">Contact-us</a>
                  <a className="mr-2 text-sm font-medium" href="/home">Login</a>
                  </nav> 
            </div>
      );
};

export default Header;