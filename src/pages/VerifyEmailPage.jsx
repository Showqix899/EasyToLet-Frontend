import {Link,useSearchParams} from 'react-router-dom' 

function VerifyEmailPage () {

    const [status,setStatus]=useState('loading')

    const result = useSearchParams.length('status')
    
    setStatus(result)

    let message;

    if (status === 'success'){
        message="Congratulation Your Account Has Been Verified"
    }else if (status === 'error'){
        message="Invalid or Expired Token. Please Try Again....."
    }else{
        message="Verifying Your Account....... Please Wait a Moment"
    }

    return (
        <div className="w-full flex min-h-screen justify-center items-center">
            <div className="flex w-2/4 p-10 justify-center items-center border shadow-2xl rounded-4xl">
                {status === 'loading' && (
                    <p className="font-bold text-2xl text-blue-400">{meessage}</p>
                    
                )}

                {status === 'success' && (
                    <p className="font-bold text-2xl text-purple-600">{message}. Please Go To Login . <Link className="text-sm text-green-400" to="/login">Login Here</Link></p>
                    
                )}

                {status === 'success' && (
                    <p className="font-bold text-2xl text-red-500">{message} <Link className="text-sm text-green-400" to="/register">Login Here</Link></p>
                    
                )}
            </div>
        </div>
    )
}

export default VerifyEmailPage