// @ts-nocheck
import redline from "/src/assets/redline.png";
import srishti from "/src/assets/srishti.png";
import srm from "/src/assets/srm.png";
import imago from "/src/assets/imago.png";
import ventura from "/src/assets/ventura.png";
import techtalk from "/src/assets/techtalk.png";
import pd from "/src/assets/pd.png";
export function Event(props) {
    return (
        <div className="my-4 mt-10">
            <div className='grid grid-col-1 my-auto h-[90vh] md:h-auto '>
                <h3 className="font-bold text-3xl text-center">{props.name}</h3>
                <div className='flex justify-center align-middle my-8'>
                    <img className='about-img w-[90%] md:w-[30%] aspect-auto my-auto' src={props.img_src} alt={props.name} width='50%' height='50%' />
                </div>
                <div className='flex justify-center align-middle'>
                    <div className='w-[90%] md:w-[60%] grid gap-4'>
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Events() {
    return (
        <div className="grid mt-16">
            <h2 className="font-bold text-5xl text-center">Events</h2>
            <Event
                name="Red Line"
                content="The REDLINE brings out the opportunity for students to obtain an
                insight into the various types of RC vehicles and their respective
                working conditions. Sample models & working models will be
                showcased to the students with a variety of sub-events like drift,
                offroad & performance in collaboration with Ananadhu
                (@copter_boy who is a professional RC motor show host and racer.
                This is the key event and will be the star attraction for AEGIS 2.0.
                "
                img_src={redline}
            />
            <Event
                name="Srihti: The Contraption"
                content="The contraption is the mechanism of making a device by using the
                materials provided (like PVC pipes, plastic balls, cardboard, etc) to
                accomplish a given task. The participants have to use their logic and
                creativity to complete the task with a maximum number of steps
                within the constraints imposed to be the winner. The ultimate aim of
                the competition is to pop a balloon through a chain of reactions
                without any discontinuation. The goal of the program is to
                encourage students from diverse backgrounds to consider careers in
                engineering and technology."
                img_src={srishti}
            />
            <Event
                name="Sample Return Mission"
                content="The SAE_FISAT student chapter in collaboration with Astro_club, FISAT is
                pleased to announce the competition ‘Sample Return Mission’. This is an
                astonishing rivalry open for all under graduates who are keen on space.
                This is a thrilling occasion to extend your insight and interest about space
                exploration.

                The sample return mission brings out the opportunity for scientists to
                study celestial bodies in our universe. Samples brought to Earth can be
                studied with various instruments that are otherwise practically
                impossible to carry in a space mission. This competition brings you an
                opportunity to become a mission director of ISRO and propose a sample
                return mission from any viable celestial body."
                img_src={srm}
            />
            <Event
                name="Imago"
                content="Photography helps in mesmerizing the environment. It helps in
                blending with species and gives a way to stock humanity.

                Inorder to enhance the real meaning of photography, we the Aegis
                2.0 techfest have decided to conduct a photography camp @
                Athirappilly.

                The camp includes basic familiarisation of photography with an
                outdoor shoot @Athirappilly. Camp would be conducted by Mr Sujith,
                An environmentalist and well known wildlife photographer."
                img_src={imago}
            />
            <Event
                name="Ventura"
                content="This competition is to enable students to think out of the box and showcase
                their innovative ideas. This will provide the budding entrepreneurs an
                opportunity to showcase their dream business ideas, concepts, product,
                inventions, and services. An expert panel will evaluate the commercial
                feasibility and the executability of the idea into a business.
                
                Idea pitch 2022 is organized by Mechanical Department in collaboration with
                IEDC FISAT. The themes for the idea pitch are agriculture Healthcare
                Automotive. The prize pool will be 8000. A team must include a minimum of 4
                members and there will be a presentation for each team."
                img_src={ventura}
            />
            <Event
                name="Tech Talk"
                content="Engineers play a huge role in healthcare and food, and in manufacturing and
                research. And by building this infrastructure, engineering has had a much
                wider and more lasting impact – it has helped to fuel economic growth. Well-built housing and sanitation improve the quality of life of all residents

                Orator: C.R NEELAKANDAN

                C. R. Neelakandan is an Indian environmental activist, politician, and writer. A
                regular contributor to Malayalam periodicals on environmental issues. He is
                an Advocate and an engineer who completed his degree from GEC Thrissur
                and worked as an Engineer at London Middle East. He was awarded
                Mukundan C. Meno
                "
                img_src={techtalk}
            />
            <Event
                name="Panel Discussion"
                content="Do you have the trading inside? Want to start a career in trading
                and stock investments? Don’t know where to begin or how to
                begin? Department of mechanical engineering along with
                Milliondots are announcing that we are here with “INFLUX: BE THE
                JACK OF ALL TRADES”. This is a panel discussion where some well-renowned traders from Milliondots will be talking about the stock
                market. They’ll make us understand the science of price
                movement, and proven techniques for profiting from trading
                setups. To make trading a source of regular income or passive
                income and we can have conversations with some of the best
                traders out there. Come and join us to feel the magic of trading."
                img_src={pd}
            />

        </div>
    )
}
