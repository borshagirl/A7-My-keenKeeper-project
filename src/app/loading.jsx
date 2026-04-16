


const LoadingPage = () => {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="text-gray-600 text-sm animate-pulse">
          Loading, please wait...
        </p>
      </div>

    </div>
  );
};

export default LoadingPage;