import Loading from "./loading.mp4"

const Loader = () => {
    return(
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-80 z-50">
                <video className="w-full max-w-xl rounded-lg" autoPlay muted loop>
                    <source src={Loading} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h1 className="text-white">Loading Video</h1>
            </div>
        </>
    )
}
export default Loader;