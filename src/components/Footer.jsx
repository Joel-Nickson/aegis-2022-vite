export default function Footer() {
    return (
        <>
            <div className="mt-10 bg-[#edf2f7]">
                <footer className="text-center">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto">
                        <div className="max-w-3xl mx-auto space-y-6">
                            {/* <h2 className="text-3xl font-semibold leading-9 tracking-tight text-brochwhite sm:text-4xl sm:leading-10">Contact</h2> */}

                            <div className="mt-4 flex flex-col flex-grow flex-wrap sm:gap-x-8 justify-evenly">

                                <div className="flex flex-col md:flex-row flex-wrap mx-auto">
                                    <div className="Venue m-2">
                                        <h3 className="text-lg font-normal underline underline-offset-4 pb-2">Mobile</h3>
                                        <p className="max-w-xs mx-auto text-xs">
                                            Govind : <a href="tel:+91751-066-1984">+91 75106 61984</a>
                                        </p>
                                        {/* <p className="max-w-xs mx-auto text-xs">
                                            num2 : +91 000000000
                                        </p> */}
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row flex-wrap mx-auto">
                                    <div className="Venue m-2">
                                        <h3 className="text-lg font-normal underline underline-offset-4 pb-2">Venue</h3>
                                        <p className="max-w-xs mx-auto text-xs ">
                                            Federal Institute of Science And Technology - Hormis Nagar, Mookkannoor, Angamaly, Kerala 683577
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* <div className="text-xs text-center font-medium mx-auto w-full font-mono"> Created & designed by
                                <a href="https://www.linkedin.com/in/joel-nickson-0a27721a5/"> Joel Nickson</a>,
                            </div> */}
                            <p className="text-xs text-center font-medium mx-auto"><span className=" font-serif">&copy;</span> 2022 Mechfisat</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}