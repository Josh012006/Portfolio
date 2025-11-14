"use client"


function GoUp() {

    
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };
    
    return (
        <div className="go-up fixed z-50 bottom-5 m-3 right-0 w-14">
            <div onClick={scrollToTop} className={`cursor-pointer w-12 h-12 rounded-3xl p-4 z-5 bg-black dark:bg-white flex items-center justify-center`}>
                <i className={`select-none fa-solid fa-arrow-up text-white dark:text-black`} aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default GoUp;