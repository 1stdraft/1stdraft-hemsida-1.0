

export default async function HomePageWrapper({children}) {

    return (
        <div className='flex flex-col justify-center mx-auto items-center'>
            {children}
        </div>
    )
};

