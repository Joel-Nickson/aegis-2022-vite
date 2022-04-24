// @ts-ignore
import aegis from '../assets/about.png'

export default function About() {
    return (
        <>
            <div className='grid grid-col-1 my-auto h-[90vh] md:h-auto'>
                <div className='flex justify-center align-middle'>
                    <img className='about-img w-full md:w-[50%] aspect-auto my-auto' src={aegis} alt="about" width='50%' height='50%' />
                </div>
                <div className='flex justify-center align-middle'>
                    <div className='w-[90%] md:w-[70%] grid gap-4'>

                        <p>Aegis 2.0 is a national wide technical fest for mechanical engineering students all
                            over india conducted by students of <a href="https://fisat.ac.in/">FISAT</a>. The event consists of different types of
                            technical events and workshops. The main purpose of this fest is to bring students
                            from different colleges in india to participate in events and make learning fun and
                            better.</p>

                        <p className='hidden md:block'>It is one of the most prestigious technical fests around the corner.
                            Coming from the same place which has given birth to talent in science,
                            engineering, innovation, and sports, from one of the most rated self-financing
                            colleges, aegis 2.0 is one of the finest events in the state. Yes, welcome to the one-day cultural and techno extravaganza</p>

                        {/* <p>on April 30th</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}