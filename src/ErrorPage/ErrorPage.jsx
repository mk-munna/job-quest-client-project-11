
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen  flex flex-col items-center  justify-center text-center'>
            <div className='w-[300px] h-[300px] lg:w-[600px] md:w-[400px] md:h-[380px] lg:h-[500px] bg-[url("https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif")] bg-no-repeat bg-contain relative'>
                <h3 className='text-6xl font-Jost absolute top-[10%] left-[38%] font-bold text-heading'>404</h3>
                <h3 className='text-2xl md:text-3xl font-Jost absolute lg:bottom-[20%] bottom-[30%] left-[20%] lg:left-[30%] text-heading'>Look like you're lost</h3>
                <p className='font-Jost leading-5 absolute md:bottom-[20%] bottom-[15%] lg:bottom-[15%] left-[10%] md:left-[16%] lg:left-[28%] text-heading'>The page you are looking for not avaible!</p>
                <Link to={'/'} className='bg-primary text-white text-sm font-Jost absolute lg:bottom-[5%] bottom-[2%] left-[33%] lg:left-[39%] hover:underline  border-primary px-3 rounded-sm active:scale-95 font-medium py-1'>Go back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
