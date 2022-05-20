function LandingPage(props){
    return(
        <div className="flex flex-col justify-center items-center">
            {props.children}
        </div>
    );
}

export {LandingPage}