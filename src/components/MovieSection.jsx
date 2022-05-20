function MovieSection(props){

    return(
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 space-y-10 md:space-y-0'>
            {props.children}
        </ul>
    );
}

export  {MovieSection}