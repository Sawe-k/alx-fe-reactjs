function UserProfile() {
  return (
    <div className="user-profile mx-auto p-4 sm:p-4 md:p-8 bg-white rounded-lg shadow-md 
                    max-w-xs sm:max-w-xs md:max-w-sm text-center">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full mx-auto w-24 h-24 md:w-36 md:h-36 object-cover"/>
      <h1 className="mt-4 font-semibold text-lg md:text-xl">John Doe</h1>
      <p className="mt-2 text-sm md:text-base text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;