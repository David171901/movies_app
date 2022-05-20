function SearchMovie(){
    return(
    <div>
        <form class="flex items-center">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg block w-64 p-2.5 focus:border-none" placeholder="Search" required autoComplete="off"/>
            </div>
            <button type="submit" class="p-2.5 text-sm font-medium text-white bg-gray-700 rounded-r-lg border border-gray-700 hover:bg-gray-800 "><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </form>
    </div>
    );
}

export {SearchMovie}