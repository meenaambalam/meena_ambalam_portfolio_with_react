import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Header from "../components/Header";

// Resume component -  renders other smaller functional components like Header, Row, Col
function Resume() {

    return (
        <div>
            <Header>Professional Experience</Header>
            <div className="card">
                <Row>
                    <Col size="md-12">
                        <div className="resumeCard">
                            <div class="col-lg-12 card-panel mb-5 mt-5 ml-3">
                                <h5>Local UP, Sep'2020-Dec'2020</h5>
                                <ul>
                                    <li class="mr-5">A React-JS based MERN stack App. </li>
                                    <li class="mr-5">A MVC (Model, View, Controller) App that connects the local businesses needing technology help with developers who are looking for opportunities 
                                        to build experience.
                                    The App allows clients to create account and submit tickets requesting for any kind of technology help with creating website or maintenance.
                                    On the other hand, the App also allows developers graduating from school, to create an account and show interest in helping the client requests.
                                    There is also Admin user, who assigns the client requests to the developers and manages the tickets and their status.           
                                </li>
                                    <li class="mr-5">
                                        A MERN (MongoDB, Expres, React & Node) Fullstack App hosted on Heroku.
                                        Uses React and React Hooks to have dynamic and smooth rendering behavior in the client-end.
                                        Uses express modules/packages for handling the REST API routes and endpoints.
                                        It uses Bootstrap library for styling.
                                        Used dotenv to hide the APIKey from the public.
                                        Data persisted in MongoDB (Mongoose) and uses the MVC (Model View and Controller) framework.
                                </li>
                                    <li><b>Application URL: </b><a href="https://localup.herokuapp.com/" target="_blank" rel="noreferrer">https://localup.herokuapp.com/</a>
                                    </li>
                                    <li><b>Github Repository: </b><a href="https://github.com/meenaambalam/local-up" target="_blank" rel="noreferrer">https://github.com/meenaambalam/local-up</a>
                                    </li>

                                </ul>
                                <hr />
                                <h5>Googly~Bookworm!, Sep'2020-Dec'2020</h5>
                                <ul>
                                    <li class="mr-5">A React-JS based GoogleBooks Search App. </li>
                                    <li class="mr-5">A MVC (Model, View, Controller) App that helps users to search for books on Google Books API and save them.
                                    The App allows users to search from google books API, and option to save the book to the bookshelf or view the book details for purchase directly from google books.
                                    It also allows to review the saved books, and remove from saved list.
                                </li>
                                    <li class="mr-5">
                                        A MERN (MongoDB, Expres, React & Node) Fullstack App hosted on Heroku.
                                        Uses React and React Hooks to have dynamic and smooth rendering behavior in the client-end.
                                        Uses express modules/packages for handling the REST API routes and endpoints.
                                        It uses Bootstrap library for styling.
                                        Used dotenv to hide the APIKey from the public.
                                        Data persisted in MongoDB (Mongoose) and uses the MVC (Model View and Controller) framework.
                                </li>
                                    <li><b>Application URL: </b><a href="https://googly-bookworm.herokuapp.com/" target="_blank" rel="noreferrer">https://googly-bookworm.herokuapp.com/</a>
                                    </li>
                                    <li><b>Github Repository: </b><a href="https://github.com/meenaambalam/googly-bookworm" target="_blank" rel="noreferrer">https://github.com/meenaambalam/googly-bookworm</a>
                                    </li>

                                </ul>
                                <hr />
                                <h5>Santa's Bag! - A Gift Planning and Tracking App, Sep'2020-Dec'2020</h5>
                                <ul>
                                    <li class="mr-5">A fun Gift Planning App perfect for the upcoming Holiday season, but can be used years around to pla gifting for many occassions.
                                </li>
                                    <li class="mr-5">A MVC (Model, View, Controller) App that helps to add family/friends interest and budget details and save them.
                                    I was a main contributor for the ideation, client-side and server-side API routing.
                                    It allows to attach/delete gift to/from each person, the gift price, URL link for the gift.
                                    If there are any regular gift favourites, you can add them to the Gift Repository to pull in the future.
                                    As you add and remove gift person to your account, it will display the Total Gift Budget, to help your planning.
                                    It also has API feature to search for gifts based on the interest and be able to attach the Gift to a Person.
                                </li>
                                    <li class="mr-5">
                                        A Node JS App hosted on Heroku, with data persisted in MySQL and uses the MVC (Model View and Contol) framework.
                                        Uses express modules/packages for handling the REST API routes and endpoints for dynamic styling and page rendition.
                                        It uses Bootstrap and Materialize libraries for styling.
                                        Uses passport.js and Bcrypt.js for userid & password authentication and encryption.
                                        Used dotenv to hide the APIKey from the public.
                                </li>
                                    <li><b>Application URL: </b><a href="https://santas-bag.herokuapp.com/" target="_blank" rel="noreferrer">https://santas-bag.herokuapp.com/</a>
                                    </li>
                                    <li><b>Github Repository: </b><a href="https://github.com/samergain/Santas_Bag/" target="_blank" rel="noreferrer">https://github.com/samergain/Santas_Bag/</a>
                                    </li>

                                </ul>
                                <hr />
                                <h5>Me-want-da-Burger!, Sep'2020-Dec'2020</h5>
                                <ul>
                                    <li class="mr-5">A fun restaurant App that let's users input the names of burgers they'd like to eat/devour and track the devoured Burgers.
                                </li>
                                    <li class="mr-5">A MVC (Model, View, Controller) Framework App to track the bruger orders. Each burger can be devoured and dynamically moved to the devoured list.
                                    This is a great App that can be used for tracking food order and the fulfilled order.
                                    The order is persisted and also option to delete the fulfilled orders are available.
                                </li>
                                    <li class="mr-5">
                                        A Node JS App hosted on Heroku, with data persisted in MySQL and uses the MVC (Model View and Contol) framework.
                                        Uses express modules/packages for handling the REST API routes and endpoints and express-handlebars for dynamic styling and page rendition.
                                </li>
                                    <li><b>Application URL: </b><a href="https://me-want-da-burger.herokuapp.com/" target="_blank" rel="noreferrer">https://me-want-da-burger.herokuapp.com/</a>
                                    </li>
                                    <li><b>Github Repository: </b><a href="https://github.com/meenaambalam/Me_want_da_Burger/" target="_blank" rel="noreferrer">https://github.com/meenaambalam/Me_want_da_Burger/</a>
                                    </li>

                                </ul>
                                <hr />
                                <h5>Plan-Eat-Arium, Sep'2020-Dec'2020</h5>
                                <ul>
                                    <li class="mr-5">A dine-in helper App, which will ease the pain of those who loving cooking.
                                </li>
                                    <li class="mr-5">It will help to lookup recipes and pin the recipes that they like to
                                    their weekly menu calendar.
                                    And will allow to save all their calendar menu choices for later
                                    reference. When they click on the particular
                                    menu item, they will be taken to the recipe link. They can delete the
                                    pinned menu if there is change of plans or if there is change of mind.
                                </li>
                                    <li><b>Application URL: </b><a href="https://meenaambalam.github.io/plan-eat-rium.io/." target="_blank" rel="noreferrer">https://meenaambalam.github.io/plan-eat-rium.io/</a>
                                    </li>
                                    <li><b>Github Repository: </b><a href="https://github.com/meenaambalam/plan-eat-rium.io/" target="_blank" rel="noreferrer">https://github.com/meenaambalam/plan-eat-rium.io/</a>
                                    </li>

                                </ul>
                                <hr />
                                <h5>Day Scheduler, Sep'2020-Dec'2020</h5>
                                <ul>
                                    <li class="mr-5">A day-scheduler is a very handy App for planning, saving and tracking
                                    your day-to-day activities.
                                </li>
                                    <li class="mr-5">The day scheduler is a handy app that allows you to enter texts into
                                    hourly slots. ths information is saved locally for
                                    future retrival.
                                    The scheduler also provide visual cue on the past, present and future
                                    timeslots. It is a simple, but very handy application that can be used
                                    on a daily basis.
                                </li>
                                    <li><b>Application URL: </b><a href="https://meenaambalam.github.io/Day_Scheduler/" target="_blank" rel="noreferrer">https://meenaambalam.github.io/Day_Scheduler/</a>
                                    </li>
                                    <li><b>Github Repository: </b><a href="https://github.com/meenaambalam/Day_Scheduler" target="_blank" rel="noreferrer">https://github.com/meenaambalam/Day_Scheduler</a>
                                    </li>

                                </ul>
                                <hr />
                                <h5>Weather Dashboard, Sep'2020-Dec'2020</h5>
                                <ul>
                                    <li class="mr-5">A Weather dashboard that canhelp you plan your trip, be it a short
                                    trip or a long one.
                                </li>
                                    <li class="mr-5">The Weather dashboard can be your weather channel. You can lookup any
                                    city around the world to pull up temperature, wind, humidity and UV
                                    information.
                                    The App will give you both current and 5-day forecast with visual
                                    representation of the heat and the weather.
                                    The App also saves the history of the searched city, for easy access to
                                    those city forecast everytime you use the App.
                                </li>
                                    <li><b>Application URL: </b><a href="https://meenaambalam.github.io/Weather_Dashboard/" target="_blank" rel="noreferrer">https://meenaambalam.github.io/Weather_Dashboard/</a>
                                    </li>
                                    <li><b>Github Repository:</b><a href="https://github.com/meenaambalam/Weather_Dashboard" target="_blank" rel="noreferrer">https://github.com/meenaambalam/Weather_Dashboard</a>
                                    </li>

                                </ul>
                                <hr />
                                <h5>Senior Business Analyst, Delta Airlines, 2015-2020</h5>
                                <ul>
                                    <li class="mr-5">As a business analyst, I worked with business liason group to enhance
                                    and support many inventory management systems.
                                </li>
                                    <li class="mr-5">I was a go-to person for critical system called Market Fare Table,
                                    which
                                    was a critical piece with
                                    Seat Availability Calculation. It was a feed that was consumed by
                                    various external vendors like Google, Amadeus etc.
                                </li>
                                    <li class="mr-5">It was a highly time sensitive application which required immediate
                                                attention and very detail analysis when issued occurred.</li>
                                    <li class="mr-5">As a BA, simultaneously managed various critical Inventory tools like
                                                RAIDER, Farelogix Availability Calculator, MFT</li>
                                    <li class="mr-5">As a BA, worked with product owners to understand the needs of
                                    products
                                    and took it from idea to fruition. QSI GUI (Quality Service Index) was
                                                one such application.</li>
                                    <li class="mr-5">Played Lead BA roles in very high visibility projects that span across
                                    multiple channels. 777Mod was one such multi-phase project, where all
                                    the fleets (DOM & INTL) were configured to have 5 cabin product
                                                structure.</li>
                                                <li class="mr-5">Have proven analytical skills and investigative skills in digging deep
                                                into problems and nailing down the root cause.</li>
                                </ul>
                                <hr />
                                <h5>Senior Developer, Delta Airlines (premerger NWA), 2007-2015</h5>
                                <ul>
                                    <li class="mr-5">Acted as the System Owner of Booking and Ticketed Revenue System, a
                                                subsystem of Market Analysis System (MAS). </li>
                                    <li class="mr-5">Was involved in multiple highly visible CSRs from requirement
                                                gathering to Implementation. </li>
                                    <li class="mr-5">Was involved actively in planning a recovery and reprocessing of
                                    Net-Ticketed-Revenue, when an implementation by a co-worker destroyed
                                                the integrity of the data.</li>
                                                <li class="mr-5">Acted as a Business Analyst representing all MAS subsystems in the CRJ
                                    Reconfiguration Project, acting as the Business Analyst. Completed
                                    Requirements Gathering and Designing phases on-time, before it got
                                                suspended. </li>
                                </ul>
                                <hr />
                                <h5>Senior Consultant, Ecolab, 2004-2007</h5>
                                <ul>
                                    <li class="mr-5">Appreciated for completing a web project from Start to implementation single handedly.  </li>
                                    <li class="mr-5">Involved in Requirements Gathering, Preparing Design Brief, getting approval from Project requestor, communicating with Server Group, Developing, Testing and Implementing projects by following the KGPM (Keane Guide to Project Management) procedures.</li>
                                    <li class="mr-5">Was involved in multiple highly visible CSRs from requirement
                                                gathering to Implementation. </li>
                                    <li class="mr-5">Played main role in transition efforts of supporting Ecolab’s Intranet Website. This included meeting with the Subject-Matter-Experts, gathering requirements and information, documenting data overviews and component overviews. </li>
                                    <li class="mr-5">Handled 24x7 support of multiple applications. Mentored new team members on applications that I supported.</li>
                                </ul>
                            </div>


                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}


export default Resume;
